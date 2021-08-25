export type typeQuest = {
  question: string;
  options: string[];
  /* 答案，注意以 1 起始 */
  answer: number;
};
export default [
  {
    question: '國家的稅收分為哪兩類？',
    options: [
      '國稅及地方稅',
      '所得稅及房屋稅',
      '地價稅及營業稅',
      '牌照稅及贈與稅',
    ],
    answer: 1,
  },
  {
    question:
      '小明住在高雄市，請問他每年收到的地價稅稅單是哪一個單位寄來的呢？',
    options: ['總統府', '高雄市稅捐處', '高雄市政府環保局', '高雄市政府警察局'],
    answer: 2,
  },
  {
    question:
      '買東西拿到的統一發票不但可以對獎、幫忙國家稅收還可以防止店家逃漏稅。',
    options: ['對', '錯'],
    answer: 1,
  },
];
