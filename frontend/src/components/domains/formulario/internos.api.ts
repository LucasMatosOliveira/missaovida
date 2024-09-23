import { authState } from "@/store/login";
import { useSnapshot } from "valtio";

export class InternosApi {

    private _url: string;
    private _postUrl: string;

    constructor() {
        this._url = "http://189.126.111.132:8001/api/Acolhidos";
        this._postUrl = "http://189.126.111.132:8001/api/Acolhido";
    }

    public async getInternoPorId(id: string, token: string): Promise<Interno> {
        const url = this._postUrl.concat(`/${id}`);
        console.log({url})
        const response = await fetch(url,{
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
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dados)
        });
        const data = await response.json();
        return data;
    }

    public async alterar(id: string, dados: Interno, token: string): Promise<Interno> {
        const response = await fetch(this._postUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dados)
        });
        const data = await response.json();
        return data;
    }

    public async getInternosForGrid(token: string) {
        const response = await fetch(this._url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data;
    }
}