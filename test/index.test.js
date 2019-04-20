const { expect } = require('chai');
const torrent2magnet = require('../lib');

describe('torrent2magnet', () => {
  it('torrent2magnet', () => {
    expect(torrent2magnet).to.be.ok;
  });

  it('torrent2magnet.default', () => {
    expect(torrent2magnet.default).to.be.ok;
  });

  it('torrent2magnet.torrent2magnet', () => {
    expect(torrent2magnet.torrent2magnet).to.be.ok;
  });

  it('torrent2magnet.torrent2magnetSync', () => {
    expect(torrent2magnet.torrent2magnetSync).to.be.ok;
  });
});
