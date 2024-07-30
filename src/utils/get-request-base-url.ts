import { EnvEnum } from "@/constants/env";

/**
 * 通过 hostname 来判断接口调用环境
 */
export const getRequestBaseUrl = (soaCode: string) => {
  // TODO: 修改为自己项目的域名
  const formatEnv = window?.location?.hostname === "xxx.xxx.com" ? EnvEnum.Prod : EnvEnum.Fat;

  const soaApiPrefix = {
    [EnvEnum.Fat]:
      typeof window === "undefined"
        ? `https://xxx.xxx.com/restapi/soa2`
        : // 本地域名默认 http，只能走代理，不能直接使用 localhost
          `http://xxx.xxx.com/soa2`,

    [EnvEnum.Prod]: typeof window === "undefined" ? `https://xxx.xxx.com/restapi/soa2` : `https://xxx.xxx.com/soa2`,
  };

  return `${soaApiPrefix[formatEnv]}/${soaCode}`;
};
