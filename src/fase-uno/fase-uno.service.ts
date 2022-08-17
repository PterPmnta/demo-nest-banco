import { Injectable } from '@nestjs/common';
import { MockFaseTres, MockSimulated } from './interface/fase-uno.interface';

@Injectable()
export class FaseUnoService {
  findFaseUno() {
    let mockSilumated: MockSimulated[] = [];
    mockSilumated = [
      {
        id: 1,
        state: 604,
      },
      {
        id: 2,
        state: 605,
      },
      {
        id: 3,
        state: 606,
      },
    ];
    return {
      repositories: mockSilumated,
    };
  }

  findMockFaseTres() {
    let mockSilumated: MockFaseTres[] = [];
    mockSilumated = [
      {
        id: '1',
        name: 'cd-common-utils',
        tribe: 'Centro Digital',
        organization: 'Banco Pichincha',
        coverage: '35%',
        codeSmells: 0,
        bugs: 0,
        vulnerabilities: 0,
        hotspots: 0,
        verificationState: 'Verificado',
        state: 'Habilitado',
      },
      {
        id: '2',
        name: 'cd-common-text',
        tribe: 'Centro Digital',
        organization: 'Banco Pichincha',
        coverage: '75%',
        codeSmells: 1,
        bugs: 0,
        vulnerabilities: 2,
        hotspots: 0,
        verificationState: 'En espera',
        state: 'Archivado',
      },
    ];

    return {
      repositories: mockSilumated,
    };
  }
}
