function getBandScore(correctAnswers: number): number {
  if (correctAnswers >= 39) return 9.0;
  else if (correctAnswers >= 37) return 8.5;
  else if (correctAnswers >= 35) return 8.0;
  else if (correctAnswers >= 33) return 7.5;
  else if (correctAnswers >= 30) return 7.0;
  else if (correctAnswers >= 27) return 6.5;
  else if (correctAnswers >= 23) return 6.0;
  else if (correctAnswers >= 20) return 5.5;
  else if (correctAnswers >= 16) return 5.0;
  else if (correctAnswers >= 13) return 4.5;
  else if (correctAnswers >= 10) return 4.0;
  else if (correctAnswers >= 7) return 3.5;
  else if (correctAnswers >= 5) return 3.0;
  else if (correctAnswers >= 3) return 2.5;
  else return 0;
}

export default getBandScore;
