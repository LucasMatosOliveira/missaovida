import { Interno, InternoReturn } from "./entidades";

export class InternosApi {

    private _url: string;
    private _postUrl: string;

    constructor() {
        this._url = "http://189.126.111.132:8001/api/Acolhidos";
        this._postUrl = "http://189.126.111.132:8001/api/Acolhido";
    }

    public async getInternoPorId(id: string, token: string): Promise<Partial<InternoReturn>> {
        const url = this._postUrl.concat(`/${id}`);
        console.log({ token })
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
        const data = await response.json();
        return data;
    }

    public async getInternos(): Promise<Interno[]> {
        const response = await fetch(this._url);
        const data = await response.json();
        return data;
    }

    public async inserir(dados: Interno, token: string): Promise<Interno> {

        const response = await fetch(this._postUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    }

    public async alterar(id: string, dados: Interno, token: string): Promise<Interno> {
        console.log({ token, dados })

        const response = await fetch(this._postUrl, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log({ data, response });
        return data;
    }

    public async getInternosForGrid(token: string) {
        const response = await fetch(this._url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const internos: Interno[] = await response.json();
        return internos.map((data) => {
            const pipeIndex = data['naturalidade'].indexOf('|')
            if (pipeIndex == -1)
                return data;

            const { cidade, estadoUf } = mapNaturalidade(data['naturalidade'])
            return {
                ...data,
                naturalidade: cidade + ' | ' + estadoUf
            }
        })

    }
}

const mapNaturalidade = (naturalidade: string): { cidade: string, estadoUf: string } => {
    const pipeIndex = naturalidade.indexOf('|')
    if (pipeIndex == -1)
        return {
            cidade: '',
            estadoUf: ''
        }

    return {
        cidade: naturalidade.substring(0, pipeIndex),
        estadoUf: naturalidade.substring(pipeIndex + 1)
    };

}