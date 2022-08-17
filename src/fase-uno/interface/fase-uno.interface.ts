export interface MockSimulated {
  id: number;
  state: number;
}

export interface MockFaseTres {
  id: string;
  name: string;
  tribe: string;
  organization: string;
  coverage: string;
  codeSmells: number;
  bugs: number;
  vulnerabilities: number;
  hotspots: number;
  verificationState: string;
  state: string;
}
