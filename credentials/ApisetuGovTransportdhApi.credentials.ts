import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovTransportdhApi implements ICredentialType {
        name = 'N8nDevApisetuGovTransportdhApi';

        displayName = 'Apisetu Gov Transportdh API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovTransportdh/apisetu-gov-transportdh.svg', dark: 'file:../nodes/ApisetuGovTransportdh/apisetu-gov-transportdh.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/transportdh/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/transportdh/v3',
                        description: 'The base URL of your Apisetu Gov Transportdh API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
