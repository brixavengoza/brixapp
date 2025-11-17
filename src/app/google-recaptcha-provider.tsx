"use client";

import type { ComponentProps } from "react";
import { GoogleReCaptchaProvider as _GoogleReCaptchaProvider } from "@google-recaptcha/react";

const siteKey = process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY;

export type ReCaptchaProviderProps = ComponentProps<
  typeof _GoogleReCaptchaProvider
>;

export const GoogleReCaptchaProvider = (props: any) => (
  <_GoogleReCaptchaProvider {...props} type="v3" siteKey={siteKey} />
);
