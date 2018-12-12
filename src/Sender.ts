import {IResult, IPrepared} from "./types";
import {getConfig} from "./config";

export default class Sender {
    private status?: number;
    async send(messageObject: IPrepared): Promise<IResult> {
        const config = getConfig();
        return fetch(`${config.protocol}://${config.host}:${config.port}/${config.path}`, {
            body: JSON.stringify(messageObject),
            method: 'post',
        })
            .then((response: Response) => {
                this.status = response.status;
                return response.json();
            }).then(data => {
                return {
                    status: this.status,
                    message: data.message
                } as IResult;
            });
    }
}