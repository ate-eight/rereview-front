import { http, HttpResponse } from 'msw';

const handlers = [
    http.get('/api/test', () => {
        return HttpResponse.json({ name: 'John' });
    }),
];

export default handlers;
