export interface ILoginDto {
  login: string;
  password: string;
} 

interface IAuthorizationApi {
  login: (params: ILoginDto) => Promise<void>;
}

class AuthorizationApi implements IAuthorizationApi {
  private url;
  private config;

  constructor(url?: string, config?: RequestInit) {
    const apiDefaultUrl = import.meta.env.VITE_MOCK_API_URL

    this.url = url ? url : apiDefaultUrl;
    this.config = config ? config : {};
  }

  public async login(params: ILoginDto): Promise<void> {
    const response = await fetch(
      this.url + '/login', {
      ...this.config,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
    
    if (response.ok) {
      alert('Авторизация прошла успешно!')
    } else {
      alert('Что-то пошло не так!')
    }
  }
}

export const authorizationApi = new AuthorizationApi();
