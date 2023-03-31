## Full tangle with no deletes
```mermaid
graph RL
A["A (0)"]
B["B (1)"]
C["C (2)"]
D["D (3)"]
E["E (4)"]
F["F (5)"]
G["G (6)"]
H["H (7)"]
I["I (8)"]
J["J (8)"]
K["K (7)"]
L["L (9)"]
M["M (10)"]
N["N (10)"]
O["O (11)"]
P["P (12)"]
Q["Q (13)"]
R["R (12)"]
S["S (12)"]
T["T (14)"]
U["U (15)"]
V["V (15)"]
W["W (16)"]
X["X (14)"]
Y["Y (17)"]
Z["Z (17)"]
BA["BA (17)"]
BB["BB (18)"]
BC["BC (18)"]
BD["BD (19)"]
BE["BE (18)"]
BF["BF (18)"]
BG["BG (20)"]
BH["BH (20)"]
BI["BI (21)"]
BJ["BJ (20)"]
BK["BK (22)"]
BL["BL (22)"]
BM["BM (23)"]
BN["BN (23)"]
BN==>BK
BN==>BL
BM==>BK
BM==>BL
BL==>BH
BL==>BI
BL==>BJ
BK==>BH
BK==>BI
BJ==>BD
BJ==>BE
BJ==>BF
BI==>BG
BH==>BD
BG==>BD
BG==>BE
BG==>BF
BF==>Y
BF==>Z
BF==>BA
BE==>Y
BE==>Z
BE==>BA
BD==>Z
BD==>BA
BD==>BB
BD==>BC
BC==>Y
BB==>Y
BA==>W
Z==>W
Z==>X
Y==>W
Y==>X
X==>Q
X==>R
X==>S
W==>U
W==>V
V==>R
V==>S
V==>T
U==>R
U==>S
U==>T
T==>Q
S==>N
S==>O
R==>N
R==>O
Q==>P
P==>N
P==>O
O==>M
N==>K
N==>L
M==>K
M==>L
L==>I
L==>J
K==>G
J==>H
I==>H
H==>G
G==>F
F==>E
E==>D
D==>C
C==>B
B==>A
BJ-.->W
BH-.->W
BG-.->W
W-.->P
W-.->R
W-.->S
S-.->D
R-.->D
P-.->D
O-.->H
O-.->K
K-.->D
H-.->D
D-.->A
linkStyle 70,71,72,73,74,75,76,77,78,79,80,81,82,83 stroke:#f00,stroke-width:2;

classDef default fill:#6df,stroke:#fff0,color:#000
classDef weak fill:#6df2,stroke:#fff0,color:#000
```
## Delete an old portion of the tangle
- Delete everything before R except cert pool
- Greedy path to root: R->D->A
- CertPool / active msgs: 2 / 23
```mermaid
graph RL
A["A (0)"]
B["B (1)"]:::weak
C["C (2)"]:::weak
D["D (3)"]
E["E (4)"]:::weak
F["F (5)"]:::weak
G["G (6)"]:::weak
H["H (7)"]:::weak
I["I (8)"]:::weak
J["J (8)"]:::weak
K["K (7)"]:::weak
L["L (9)"]:::weak
M["M (10)"]:::weak
N["N (10)"]:::weak
O["O (11)"]:::weak
P["P (12)"]:::weak
Q["Q (13)"]:::weak
R["R (12)"]
S["S (12)"]
T["T (14)"]
U["U (15)"]
V["V (15)"]
W["W (16)"]
X["X (14)"]
Y["Y (17)"]
Z["Z (17)"]
BA["BA (17)"]
BB["BB (18)"]
BC["BC (18)"]
BD["BD (19)"]
BE["BE (18)"]
BF["BF (18)"]
BG["BG (20)"]
BH["BH (20)"]
BI["BI (21)"]
BJ["BJ (20)"]
BK["BK (22)"]
BL["BL (22)"]
BM["BM (23)"]
BN["BN (23)"]
BN==>BK
BN==>BL
BM==>BK
BM==>BL
BL==>BH
BL==>BI
BL==>BJ
BK==>BH
BK==>BI
BJ==>BD
BJ==>BE
BJ==>BF
BI==>BG
BH==>BD
BG==>BD
BG==>BE
BG==>BF
BF==>Y
BF==>Z
BF==>BA
BE==>Y
BE==>Z
BE==>BA
BD==>Z
BD==>BA
BD==>BB
BD==>BC
BC==>Y
BB==>Y
BA==>W
Z==>W
Z==>X
Y==>W
Y==>X
X==>Q
X==>R
X==>S
W==>U
W==>V
V==>R
V==>S
V==>T
U==>R
U==>S
U==>T
T==>Q
S==>N
S==>O
R==>N
R==>O
Q==>P
P==>N
P==>O
O==>M
N==>K
N==>L
M==>K
M==>L
L==>I
L==>J
K==>G
J==>H
I==>H
H==>G
G==>F
F==>E
E==>D
D==>C
C==>B
B==>A
BJ-.->W
BH-.->W
BG-.->W
W-.->P
W-.->R
W-.->S
S-.->D
R-.->D
P-.->D
O-.->H
O-.->K
K-.->D
H-.->D
D-.->A
linkStyle 34,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69 stroke:#0002,stroke-width:2;
linkStyle 70,71,72,74,75,76,77,83 stroke:#f00,stroke-width:2;
linkStyle 73,78,79,80,81,82 stroke:#f003,stroke-width:2;

classDef default fill:#6df,stroke:#fff0,color:#000
classDef weak fill:#6df2,stroke:#fff0,color:#000
```
## Delete more of the tangle
- Delete everything before BD except cert pool
- Greedy path to root: BD->Z->W->R->D->A
- CertPool / active msgs: 5 / 11
```mermaid
graph RL
A["A (0)"]
B["B (1)"]:::weak
C["C (2)"]:::weak
D["D (3)"]
E["E (4)"]:::weak
F["F (5)"]:::weak
G["G (6)"]:::weak
H["H (7)"]:::weak
I["I (8)"]:::weak
J["J (8)"]:::weak
K["K (7)"]:::weak
L["L (9)"]:::weak
M["M (10)"]:::weak
N["N (10)"]:::weak
O["O (11)"]:::weak
P["P (12)"]:::weak
Q["Q (13)"]:::weak
R["R (12)"]
S["S (12)"]:::weak
T["T (14)"]:::weak
U["U (15)"]:::weak
V["V (15)"]:::weak
W["W (16)"]
X["X (14)"]:::weak
Y["Y (17)"]:::weak
Z["Z (17)"]
BA["BA (17)"]:::weak
BB["BB (18)"]:::weak
BC["BC (18)"]:::weak
BD["BD (19)"]
BE["BE (18)"]
BF["BF (18)"]
BG["BG (20)"]
BH["BH (20)"]
BI["BI (21)"]
BJ["BJ (20)"]
BK["BK (22)"]
BL["BL (22)"]
BM["BM (23)"]
BN["BN (23)"]
BN==>BK
BN==>BL
BM==>BK
BM==>BL
BL==>BH
BL==>BI
BL==>BJ
BK==>BH
BK==>BI
BJ==>BD
BJ==>BE
BJ==>BF
BI==>BG
BH==>BD
BG==>BD
BG==>BE
BG==>BF
BF==>Y
BF==>Z
BF==>BA
BE==>Y
BE==>Z
BE==>BA
BD==>Z
BD==>BA
BD==>BB
BD==>BC
BC==>Y
BB==>Y
BA==>W
Z==>W
Z==>X
Y==>W
Y==>X
X==>Q
X==>R
X==>S
W==>U
W==>V
V==>R
V==>S
V==>T
U==>R
U==>S
U==>T
T==>Q
S==>N
S==>O
R==>N
R==>O
Q==>P
P==>N
P==>O
O==>M
N==>K
N==>L
M==>K
M==>L
L==>I
L==>J
K==>G
J==>H
I==>H
H==>G
G==>F
F==>E
E==>D
D==>C
C==>B
B==>A
BJ-.->W
BH-.->W
BG-.->W
W-.->P
W-.->R
W-.->S
S-.->D
R-.->D
P-.->D
O-.->H
O-.->K
K-.->D
H-.->D
D-.->A
linkStyle 17,19,20,22,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69 stroke:#0002,stroke-width:2;
linkStyle 70,71,72,74,77,83 stroke:#f00,stroke-width:2;
linkStyle 73,75,76,78,79,80,81,82 stroke:#f003,stroke-width:2;

classDef default fill:#6df,stroke:#fff0,color:#000
classDef weak fill:#6df2,stroke:#fff0,color:#000
```
