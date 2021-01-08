import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { MessagePackHubProtocol } from '@microsoft/signalr-protocol-msgpack'
import { VideoModel } from '../models/video-model/video.model';
import { Routes } from '../shared/utils/routing-constants';
import { HttpClient, HttpParams } from "@angular/common/http";


export class VideoUploadSignalR {
    private hubConnection: HubConnection;
    private connectionUrl = "https://localhost:5001/video/upload/watch";

    public constructor(private http: HttpClient) {

    }

    public onInit() {
        this.startConnection();
        this.addListeners();
    }

    public videoUploadWatch(video: VideoModel) {
        return this.http.post(Routes.VIDEO_UPLOAD_WATCH.replace("{connectionId}", this.getConnectionId()), video)
    }

    private getConnection(): HubConnection {
        return new HubConnectionBuilder()
            .withUrl(this.connectionUrl)
            .withHubProtocol(new MessagePackHubProtocol())
            .build();
    }

    private startConnection() {
        this.hubConnection = this.getConnection();

        this.hubConnection.start()
            .then(() => console.log("connection started"))
            .catch((error) => console.log(`error while establishing signalr connection ${error}`));
    }

    private addListeners() {
        this.hubConnection.on("ReceiveVideoInfo", (info) => {
            console.log(info);
        })
    }

    private getConnectionId(): string {
        return this.hubConnection.connectionId;
    }
}