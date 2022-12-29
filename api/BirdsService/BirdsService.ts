
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

import AxiosAPI from "../AxiosApi"
import { RecordingResponse } from "./types";

export class BirdsService {

    public static serverHealthCheck() {
        return AxiosAPI.get("http://192.168.0.100:8080/healthcheck");
    }

    public static async sendRecortding(): Promise<RecordingResponse | undefined> {
        const fileToUpload = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: false });
        if (fileToUpload.type === "success") {
            const { uri } = fileToUpload;
            const [fileName, extension] = fileToUpload.name.split(".");

            const options: FileSystem.ReadingOptions = { encoding: FileSystem.EncodingType.Base64 };
            const fileContentBase64 = await FileSystem.readAsStringAsync(uri, options);
            const data = {
                base64Data: fileContentBase64,
                fileName,
                extension: `.${extension}`,
            };

            return AxiosAPI.post("http://192.168.0.100:8080/analyze", data)
        }
    }
}
