// @ts-ignore
import config from "../../../assets/config.json";
import {Environment} from "./environment";

export class AppConfigComponentService {
  constructor(private readonly environment: Environment) {
  }

  get serverUrl() {
    return this.environmentConfig.serverUrl;
  }

  private get environmentConfig(): { serverUrl: string } {
    switch (this.environment) {
      case Environment.mock:
        return config.mock;
      case Environment.dev:
        return config.dev;
      case Environment.prod:
        return config.prod;
    }
  }
}
