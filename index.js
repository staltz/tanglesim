const msgs = [];
let latestID = 0;

function powerLawRandom() {
  return Math.pow(Math.random(), 0.2);
}

function randomBetween(start, end) {
  return Math.random() * (end - start) + start;
}

function lipmaa(n) {
  let m = 1;
  let po3 = 3;
  let u = n;

  // find k such that (3^k - 1)/2 >= n
  while (m < n) {
    po3 *= 3;
    m = (po3 - 1) / 2;
  }

  // find longest possible backjump
  po3 /= 3;
  if (m !== n) {
    while (u !== 0) {
      m = (po3 - 1) / 2;
      po3 /= 3;
      u %= m;
    }

    if (m !== po3) {
      po3 = m;
    }
  }

  return n - po3;
}

function allTips(upto) {
  const tips = new Set();
  for (let i = 0; i < upto; i++) {
    tips.add(i);
  }
  for (let i = 0; i < upto; i++) {
    for (const prev of msgs[i].prev) {
      tips.delete(prev);
    }
  }
  return tips;
}

const depthCache = new Map();
function depthOfNode(prev) {
  if (depthCache.has(prev)) return depthCache.get(prev);
  if (prev.length === 0) {
    depthCache.set(prev, 0);
    return 0;
  } else {
    const d = 1 + Math.max(...prev.map((i) => depthOfNode(msgs[i].prev)));
    depthCache.set(prev, d);
    return d;
  }
}

function simPublish(mergeRange) {
  if (msgs.length === 0) {
    msgs.push({prev: [], depth: 0});
  } else {
    const upto = Math.ceil(powerLawRandom() * msgs.length);
    if (upto <= msgs.length - mergeRange) {
      simPublish(mergeRange);
      return;
    }
    const prev = [...allTips(upto)];
    const depth = depthOfNode(prev);
    const lip = lipmaa(depth + 1);
    const lipmaaPrev = [];
    if (depth - lip > 1) {
      for (let i = 0; i < upto; i++) {
        if (depthOfNode(msgs[i].prev) === lip - 1) {
          lipmaaPrev.push(i);
        }
      }
    }
    msgs.push({prev, lipmaa: lipmaaPrev, depth: depthOfNode(prev)});
  }
}

function greedyPathToRoot(i) {
  const path = [i];
  theloop: while (msgs[i].prev.length > 0) {
    lipmaaLoop: for (const prev of msgs[i].lipmaa) {
      if (msgs[prev].deleted) continue lipmaaLoop;
      i = prev;
      path.push(i);
      continue theloop;
    }
    prevLoop: for (const prev of msgs[i].prev) {
      if (msgs[prev].deleted) continue prevLoop;
      i = prev;
      path.push(i);
      continue theloop;
    }
  }
  return path;
}

function simDelete(anchor) {
  const pathToRoot = greedyPathToRoot(anchor);
  for (let i = 0; i < anchor; i++) {
    if (pathToRoot.includes(i)) continue;
    msgs[i].deleted = true;
  }
  console.log(
    '- Delete everything before ' + toAlphabet(anchor) + ' except cert pool',
  );
  console.log('- Greedy path to root:', pathToRoot.map(toAlphabet).join('->'));
  const certPoolSize = msgs.filter((m, i) => !m.deleted & (i < anchor)).length;
  const activeMsgs = msgs.length - anchor;
  console.log('- CertPool / active msgs:', certPoolSize, '/', activeMsgs);
}

function toAlphabet(i) {
  const range = 'Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
  if (i < range) {
    return String.fromCharCode('A'.charCodeAt(0) + i);
  } else if (i < range * range) {
    return (
      String.fromCharCode('A'.charCodeAt(0) + Math.floor(i / range)) +
      String.fromCharCode('A'.charCodeAt(0) + (i % range))
    );
  } else {
    throw new Error('too large');
  }
}

function* generateMermaid() {
  yield '```mermaid';
  yield 'graph RL';
  for (let i = 0; i < msgs.length; i++) {
    const m = msgs[i];
    const name = toAlphabet(i);
    const label = `${name}["${name} (${m.depth})"]`;
    if (m.deleted) yield `${label}:::weak`;
    else yield label;
  }
  let linkCount = 0;
  const deletedLinks = [];
  for (let i = msgs.length - 1; i > 0; i--) {
    for (const prev of msgs[i].prev) {
      yield `${toAlphabet(i)}==>${toAlphabet(prev)}`;
      if (msgs[i].deleted || msgs[prev].deleted) deletedLinks.push(linkCount);
      linkCount++;
    }
  }
  const lipmaaLinkIds = [];
  const deletedLipmaaLinkIds = [];
  let latestLinkId = linkCount;
  for (let i = msgs.length - 1; i > 0; i--) {
    for (const prev of msgs[i].lipmaa) {
      if (msgs[i].deleted || msgs[prev].deleted) {
        deletedLipmaaLinkIds.push(latestLinkId);
      } else {
        lipmaaLinkIds.push(latestLinkId);
      }
      yield `${toAlphabet(i)}-.->${toAlphabet(prev)}`;
      latestLinkId++;
    }
  }
  if (deletedLinks.length > 0) {
    yield `linkStyle ${deletedLinks.join(',')} stroke:#fff2,stroke-width:2;`;
  }
  if (lipmaaLinkIds.length > 0) {
    yield `linkStyle ${lipmaaLinkIds.join(',')} stroke:#f00,stroke-width:2;`;
  }
  if (deletedLipmaaLinkIds.length > 0) {
    yield `linkStyle ${deletedLipmaaLinkIds.join(',')} stroke:#f003,stroke-width:2;`;
  }
  yield '';
  yield 'classDef default fill:#6df,stroke:#fff0,color:#000';
  yield 'classDef weak fill:#6df2,stroke:#fff0,color:#000';
  yield '```';
}

const TOTAL_MSGS = 40;
const MERGE_RANGE = 5;
function run() {
  for (let i = 0; i < TOTAL_MSGS; i++) {
    simPublish(MERGE_RANGE);
  }

  console.log('## Full tangle with no deletes');
  for (const line of generateMermaid()) console.log(line);

  console.log('## Delete an old portion of the tangle');
  const deletePoint1 = Math.ceil(TOTAL_MSGS * randomBetween(0.2, 0.6));
  simDelete(deletePoint1);
  for (const line of generateMermaid()) console.log(line);

  console.log('## Delete more of the tangle');
  const deletePoint2 = Math.ceil((deletePoint1 + TOTAL_MSGS) / 2);
  simDelete(deletePoint2);
  for (const line of generateMermaid()) console.log(line);
}

run();
