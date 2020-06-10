
const hackerNewsService = require('./hackerNews')
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

test('Check if objet in array contains value expected', () => {
    const mock = jest.fn().mockReturnValue(
        jsonMock
    );
    hackerNewsService.getHackerNewPosts = mock;
    const result = hackerNewsService.getHackerNewPosts();
    expect(result[0].author).toBe('mromanuk');
    expect(result).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                author: 'mromanuk',
                story_text: null,
                comment_text: 'this is a comment text'
            })
        ])
    )
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
})

test('Check saved object in database', () => {
    const mock = jest.fn().mockReturnValue(
        jsonMock
    );
    hackerNewsService.saveHackerNewsPosts = mock;
    const result = hackerNewsService.saveHackerNewsPosts(jsonMock);
    expect(result).toMatchObject(jsonMock);
})



