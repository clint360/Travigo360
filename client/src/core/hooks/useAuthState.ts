export interface Redirect {
    auth: boolean;
    to: string;
  }

  export type RedirectProps = string | boolean | undefined;