// https://www.npmjs.com/package/karma-sinon/v/1.0.5 install!!
describe('main', function () {
  describe('changeTab -', function () {
    it('should set target variable', function () {
      const e = { target: { id: 'xxx', getAttribute: () => null } };
      changeTab(e);
      expect(target.id).equal('xxx');
    });
    it('should call the getAttribute function', function () {
      const e = { target: { id: 'xxx', getAttribute: () => null } };
      var setNameSpy = sinon.spy(e.target, 'getAttribute');
      changeTab(e);
      assert(setNameSpy.calledOnce);
    });
  });
});
