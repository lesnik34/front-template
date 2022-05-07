import Http from './http';

const ExampleAPI = {
    example: async (): Promise<any> => {
        const instance = Http.Private;
        const token = `Bearer ${localStorage.getItem('auth_token')}`;
        instance.defaults.headers.get.Authorization = token;

        const response = await instance.get('/example');
        return response.data;
    },
};

export default ExampleAPI;
