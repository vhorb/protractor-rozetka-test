module.exports = {
  get loginPage() {
    return require('./login.page');
  },
  get flightFinder() {
    return require('./flight.finder.page');
  },
  get selectFlight() {
    return require('./select.flight.page');
  },
  get bookFlight() {
    return require('./book.flight.page');
  },
  get flightConfirmation() {
    return require('./flight.confirmation.page');
  },
  get signOff() {
    return require('./sing.off.page');
  }
};
