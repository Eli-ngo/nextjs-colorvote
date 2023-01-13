Création d'une PWA destinée à une association qui utilise la méthode de l'Abaque de Réignier pour le travail collaboratif. Cette application est un outil visuel d'aide à la prise de décision facilitant la négociation collective. Chaque utilisateur donne son ressenti grâce à un code couleur.

## Comment ça marche

L'application possède 2 interfaces : 

1/ Une interface pour un invité sur laquelle il peut voter en inscrivant un code PIN que l'admin lui aura au préalable communiqué. L'invité devra ensuite répondre à plusieurs anecdotes/questions qui défilent et clique sur une couleur pour donner son avis.


- Vert foncé s'il est tout à fait d'accord
- Vert clair s'il est d'accord
- Orange, s'il est mitigé
- Rouge clair s'il n'est pas d'accord
- Rouge foncé s'il n'est pas du tout d'accord
- Blanc s'il ne sait pas quoi répondre
- La personne peut aussi décider de ne pas répondre, la couleur affectée à sa réponse est alors le noir.


2/ Une interface pour un admin sur laquelle il peut créer une session, des questions et visualiser à la fin, les résultats des participants. L'admin est celui qui décide de passer à la question suivante à l'aide d'un bouton

## Comment lancer l'application

1/ Cloner le projet

```bash
git clone https://github.com/Eli-ngo/nextjs-colorvote
```

2/ Installer toutes les dépendances

```bash
npm i
# ou
yarn i
```

3/ Lancer le serveur

```bash
npm run dev
# ou
yarn dev
```

4/ Ouvrir le navigateur avec http://localhost:3000

## Notre stack

Ce projet utilise le langage NextJS pour le front et le back. Comme base de donnée MongoDB.

## Nos pratiques pour mener à bien ce projet

Nous avions créee 4 branches en tout pour éviter le plus de conflits possibles : master - back - front-ellie - front-sarah. La branche Master étant notre branche de production.

Nous codons en SASS à l'aide de la dépendance Styled-Components et les nommons à l'aide de la méthode BEM : Block__Element--Modifier

## Notre groupe est composé de :
- Yassine Souissy
- Elisabeth Ngo
- Sarah Hitier
- Ulysse Rouard
