const hackerNewsService = require('../services/hackerNews');
const hackerNewsController = require('./endpoint')

const jsonMock = [{
    created_at: '2020-06-09T14:46:31.000Z',
    title: null,
    url: null,
    author: 'mromanuk',
    story_text: null,
    comment_text: 'this is a comment text',
    story_id: 23465087,
    story_title: 'Build your own PaaSs in minutes',
    story_url: 'https://caprover.com/',
    _tags: [
        'comment',
        'author_mromanuk',
        'story_23465087'
    ],
    objectID: '23467090',
}];

it('should getHackerNewsArticles endpoint not be undefined', () => {
    expect(hackerNewsController.getHackerNewsArticles()).toBeDefined();
});

it('should initialPopulate endpoint not be undefined', () => {
    expect(hackerNewsController.initialPopulate()).toBeDefined();
});

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

test('should test getHackerNewsArticles', async () => {
    jest.mock('../services/hackerNews.js', () => jest.fn());
    hackerNewsService.getHackerNewPosts = jest.fn(() => jsonMock)
    const data = jsonMock;
    hackerNewsService.getHackerNewPosts.mockImplementation(() => Promise.resolve(data));
    const res = mockResponse();
    await hackerNewsController.getHackerNewsArticles(null, res);
    expect(res.status).toBeCalledWith(200);
});
