import assert from 'assert';

it('Just a sum', function () {
    const result = 2 + 2;
    assert.equal(result, 4);
});

it('Just a sum FAILING', function () {
    const result = 1 + 2;
    assert.equal(result, 4);
});