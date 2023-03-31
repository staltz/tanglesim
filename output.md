## Full tangle with no deletes
```mermaid
graph RL
A["A (0)"]
B["B (1)"]
C["C (2)"]
D["D (3)"]
E["E (4)"]
F["F (5)"]
G["G (4)"]
H["H (6)"]
I["I (7)"]
J["J (7)"]
K["K (8)"]
L["L (8)"]
M["M (7)"]
N["N (9)"]
O["O (9)"]
P["P (10)"]
Q["Q (9)"]
R["R (11)"]
S["S (11)"]
T["T (12)"]
U["U (12)"]
V["V (12)"]
W["W (13)"]
X["X (13)"]
Y["Y (14)"]
Z["Z (15)"]
BA["BA (14)"]
BB["BB (16)"]
BC["BC (17)"]
BD["BD (16)"]
BE["BE (17)"]
BF["BF (16)"]
BG["BG (17)"]
BH["BH (18)"]
BI["BI (18)"]
BJ["BJ (19)"]
BK["BK (20)"]
BL["BL (19)"]
BM["BM (20)"]
BN["BN (21)"]
BN==>BK
BN==>BL
BN==>BM
BM==>BJ
BL==>BF
BL==>BG
BL==>BH
BK==>BJ
BJ==>BG
BJ==>BH
BJ==>BI
BI==>BC
BI==>BD
BI==>BE
BI==>BF
BH==>BC
BH==>BD
BH==>BE
BG==>BB
BF==>Z
BF==>BA
BE==>BB
BD==>Z
BD==>BA
BC==>BB
BB==>Z
BB==>BA
BA==>U
BA==>V
BA==>W
Z==>Y
Y==>U
Y==>V
Y==>W
Y==>X
X==>T
W==>T
V==>R
U==>R
T==>R
T==>S
S==>P
R==>P
R==>Q
Q==>K
Q==>L
Q==>M
P==>N
P==>O
O==>K
O==>L
N==>K
N==>L
N==>M
M==>H
L==>I
L==>J
K==>I
J==>H
I==>H
H==>F
H==>G
G==>D
F==>E
E==>D
D==>C
C==>B
B==>A
BM-.->BB
BM-.->BD
BM-.->BF
BK-.->BB
BK-.->BD
BK-.->BF
BF-.->T
BF-.->U
BF-.->V
BD-.->T
BD-.->U
BD-.->V
BB-.->T
BB-.->U
BB-.->V
V-.->D
U-.->D
T-.->D
S-.->I
S-.->J
S-.->M
R-.->I
R-.->J
R-.->M
M-.->D
J-.->D
I-.->D
D-.->A
linkStyle 68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95 stroke:#f00,stroke-width:2;

classDef default fill:#6df,stroke:#fff0,color:#000
classDef weak fill:#6df2,stroke:#fff0,color:#000
```
## Delete an old portion of the tangle
- Delete everything before M except cert pool
- Greedy path to root: M->D->A
- CertPool / active msgs: 2 / 28
```mermaid
graph RL
A["A (0)"]
B["B (1)"]:::weak
C["C (2)"]:::weak
D["D (3)"]
E["E (4)"]:::weak
F["F (5)"]:::weak
G["G (4)"]:::weak
H["H (6)"]:::weak
I["I (7)"]:::weak
J["J (7)"]:::weak
K["K (8)"]:::weak
L["L (8)"]:::weak
M["M (7)"]
N["N (9)"]
O["O (9)"]
P["P (10)"]
Q["Q (9)"]
R["R (11)"]
S["S (11)"]
T["T (12)"]
U["U (12)"]
V["V (12)"]
W["W (13)"]
X["X (13)"]
Y["Y (14)"]
Z["Z (15)"]
BA["BA (14)"]
BB["BB (16)"]
BC["BC (17)"]
BD["BD (16)"]
BE["BE (17)"]
BF["BF (16)"]
BG["BG (17)"]
BH["BH (18)"]
BI["BI (18)"]
BJ["BJ (19)"]
BK["BK (20)"]
BL["BL (19)"]
BM["BM (20)"]
BN["BN (21)"]
BN==>BK
BN==>BL
BN==>BM
BM==>BJ
BL==>BF
BL==>BG
BL==>BH
BK==>BJ
BJ==>BG
BJ==>BH
BJ==>BI
BI==>BC
BI==>BD
BI==>BE
BI==>BF
BH==>BC
BH==>BD
BH==>BE
BG==>BB
BF==>Z
BF==>BA
BE==>BB
BD==>Z
BD==>BA
BC==>BB
BB==>Z
BB==>BA
BA==>U
BA==>V
BA==>W
Z==>Y
Y==>U
Y==>V
Y==>W
Y==>X
X==>T
W==>T
V==>R
U==>R
T==>R
T==>S
S==>P
R==>P
R==>Q
Q==>K
Q==>L
Q==>M
P==>N
P==>O
O==>K
O==>L
N==>K
N==>L
N==>M
M==>H
L==>I
L==>J
K==>I
J==>H
I==>H
H==>F
H==>G
G==>D
F==>E
E==>D
D==>C
C==>B
B==>A
BM-.->BB
BM-.->BD
BM-.->BF
BK-.->BB
BK-.->BD
BK-.->BF
BF-.->T
BF-.->U
BF-.->V
BD-.->T
BD-.->U
BD-.->V
BB-.->T
BB-.->U
BB-.->V
V-.->D
U-.->D
T-.->D
S-.->I
S-.->J
S-.->M
R-.->I
R-.->J
R-.->M
M-.->D
J-.->D
I-.->D
D-.->A
linkStyle 44,45,49,50,51,52,54,55,56,57,58,59,60,61,62,63,64,65,66,67 stroke:#fff2,stroke-width:2;
linkStyle 68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,88,91,92,95 stroke:#f00,stroke-width:2;
linkStyle 86,87,89,90,93,94 stroke:#f003,stroke-width:2;

classDef default fill:#6df,stroke:#fff0,color:#000
classDef weak fill:#6df2,stroke:#fff0,color:#000
```
## Delete more of the tangle
- Delete everything before BA except cert pool
- Greedy path to root: BA->U->D->A
- CertPool / active msgs: 3 / 14
```mermaid
graph RL
A["A (0)"]
B["B (1)"]:::weak
C["C (2)"]:::weak
D["D (3)"]
E["E (4)"]:::weak
F["F (5)"]:::weak
G["G (4)"]:::weak
H["H (6)"]:::weak
I["I (7)"]:::weak
J["J (7)"]:::weak
K["K (8)"]:::weak
L["L (8)"]:::weak
M["M (7)"]:::weak
N["N (9)"]:::weak
O["O (9)"]:::weak
P["P (10)"]:::weak
Q["Q (9)"]:::weak
R["R (11)"]:::weak
S["S (11)"]:::weak
T["T (12)"]:::weak
U["U (12)"]
V["V (12)"]:::weak
W["W (13)"]:::weak
X["X (13)"]:::weak
Y["Y (14)"]:::weak
Z["Z (15)"]:::weak
BA["BA (14)"]
BB["BB (16)"]
BC["BC (17)"]
BD["BD (16)"]
BE["BE (17)"]
BF["BF (16)"]
BG["BG (17)"]
BH["BH (18)"]
BI["BI (18)"]
BJ["BJ (19)"]
BK["BK (20)"]
BL["BL (19)"]
BM["BM (20)"]
BN["BN (21)"]
BN==>BK
BN==>BL
BN==>BM
BM==>BJ
BL==>BF
BL==>BG
BL==>BH
BK==>BJ
BJ==>BG
BJ==>BH
BJ==>BI
BI==>BC
BI==>BD
BI==>BE
BI==>BF
BH==>BC
BH==>BD
BH==>BE
BG==>BB
BF==>Z
BF==>BA
BE==>BB
BD==>Z
BD==>BA
BC==>BB
BB==>Z
BB==>BA
BA==>U
BA==>V
BA==>W
Z==>Y
Y==>U
Y==>V
Y==>W
Y==>X
X==>T
W==>T
V==>R
U==>R
T==>R
T==>S
S==>P
R==>P
R==>Q
Q==>K
Q==>L
Q==>M
P==>N
P==>O
O==>K
O==>L
N==>K
N==>L
N==>M
M==>H
L==>I
L==>J
K==>I
J==>H
I==>H
H==>F
H==>G
G==>D
F==>E
E==>D
D==>C
C==>B
B==>A
BM-.->BB
BM-.->BD
BM-.->BF
BK-.->BB
BK-.->BD
BK-.->BF
BF-.->T
BF-.->U
BF-.->V
BD-.->T
BD-.->U
BD-.->V
BB-.->T
BB-.->U
BB-.->V
V-.->D
U-.->D
T-.->D
S-.->I
S-.->J
S-.->M
R-.->I
R-.->J
R-.->M
M-.->D
J-.->D
I-.->D
D-.->A
linkStyle 19,22,25,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67 stroke:#fff2,stroke-width:2;
linkStyle 68,69,70,71,72,73,75,78,81,84,95 stroke:#f00,stroke-width:2;
linkStyle 74,76,77,79,80,82,83,85,86,87,88,89,90,91,92,93,94 stroke:#f003,stroke-width:2;

classDef default fill:#6df,stroke:#fff0,color:#000
classDef weak fill:#6df2,stroke:#fff0,color:#000
```
