import { CotransClient, UploadOptions } from "@cotrans/client";

type Context = {
	illustIdMapping: Record<string, number>
};

const client = new CotransClient<Context>({
	context: {illustIdMapping: {}}
});

const abort = new AbortSignal();
await client.startBatch({
	signal: abort,
});

const images = [{mime: "image/png", blob: new Blob()}];
const config: Omit<UploadOptions, "file"> = {
	targetLanguage: "ENG",
	detector: "ctd",
	direction: "auto",
	onDownloadFinish(id, res, ctx) {
		// res is blob
	},
	onDownloadProgress() {
		
	},
	onAbort(id, reason, ctx) {
		
	}
};

await Promise.all(images.map(e => client.upload({
	file: e.blob,
	mime: e.mime,
	...(config as any),
})))