
const mockRequest = (data = {}) => {
    const req = {};
    req.body = data.body || {};
    req.params = data.params || {};
    req.query = data.query || {};
    return req;
};

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.header = jest.fn().mockReturnValue(res);
    return res;
};

module.exports = { mockRequest, mockResponse };