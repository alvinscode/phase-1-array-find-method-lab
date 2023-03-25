function superbowlWin(record) {
    const winningYear = record.find(function(obj) {
      return obj.result === "W";
    })
    return winningYear ? winningYear.year : undefined;
}