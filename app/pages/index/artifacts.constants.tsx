export enum Label {
  Engineering = 'engineering',
  Cooking = 'cooking',
  Music = 'music',
  Design = 'design',
  Systems = 'systems',
}

export const artifacts = [
  {
    title: 'ARTIFACT_0001 : antidesign.xyz',
    date: 'AUG 08, 1906',
    labels: [Label.Engineering, Label.Design],
  },
  {
    title: 'ARTIFACT_0023 : multistep form architecture',
    date: 'JAN 28, 2006',
    labels: [Label.Systems],
  },
  {
    title: 'ARTIFACT_0112 : state management in react',
    date: 'OCT 16, 2106',
    labels: [Label.Engineering, Label.Music],
  },
  {
    title: 'ARTIFACT_0014 : bacon & basil fried rice recipe',
    date: 'DEC 27, 1140',
    labels: [Label.Cooking],
  },

  {
    title: 'SONICDREAMS_0014 : everything all at once',
    date: 'MAR 08, 2711',
    labels: [Label.Engineering, Label.Music],
  },
  {
    title: 'SONICDREAMS_0014 : everything all at once',
    date: 'AUGUST 08, 1906',
    labels: [Label.Engineering, Label.Music],
  },
];
