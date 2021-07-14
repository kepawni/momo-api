import {Injectable} from '@nestjs/common';
import {v4} from 'uuid';
import * as Pusher from 'pusher';

@Injectable()
export class AppService {
    private pusher: Pusher;

    constructor() {
        this.pusher = new Pusher({
            appId: '1235451',
            key: 'aa0e858e50bdfee1caa2',
            secret: '45799a3de4f09344de9e',
            cluster: 'eu',
            useTLS: true,
        });
    }

    score(what: string) {
        this.pusher.trigger('scores', what, v4());
    }
}
