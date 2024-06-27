threat=[
		{
			"agentRealtimeInfo": {
				"activeThreats": 0,
				"agentComputerName": "SG00123WL",
				"agentDomain": "WORKGROUP",
				"agentId": "1429514920266314075",
				"agentMachineType": "laptop",
				"agentMitigationMode": "detect",
				"agentNetworkStatus": "connected",
				"agentOsName": "Windows 10 Pro",
				"agentOsRevision": "19044",
				"agentOsType": "windows",
				"agentUuid": "5f21145505a1405d9497be602dd9cca1",
				"agentVersion": "22.2.3.402",
				"groupId": "1428013552422669853",
				"groupName": "Default Group",
				"networkInterfaces": [
					{
						"id": "1569910606904792149",
						"inet": [
							"192.168.2.61"
						],
						"inet6": [
							"fe80::c794:4532:d9dc:5ce6"
						]
					},
					{
						"id": "1569910606888014931",
						"inet": [
							"100.64.0.1"
						],
						"inet6": [
							"fe80::e160:f786:ddd2:35cc"
						],
						"name": "Local Area Connection",
						"physical": "00:ff:49:4e:ab:f7"
					}
				],
				"operationalState": "na",
				"scanStatus": "none",
				"siteId": "1237023552405892636",
				"siteName": "Default site",
				"userActionsNeeded": []
			},
			"id": "1429600455345937931",
			"indicators": [
				{
					"category": "General",
					"description": "This binary imports functions used to raise kernel exceptions"
				},
				{
					"category": "General",
					"description": "This binary imports debugger functions"
				},
				{
					"category": "General",
					"description": "This binary creates a System Service"
				}
			],
			"mitigationStatus": [],
			"threatInfo": {
				"analystVerdict": "suspicious",
				"analystVerdictDescription": "Suspicious",
				"certificateId": "LENOVO",
				"classification": "Malware",
				"classificationSource": "Static",
				"collectionId": "1429538443743635758",
				"confidenceLevel": "suspicious",
				"createdAt": "2022-05-27T11:20:54.620000Z",
				"detectionEngines": [
					{
						"key": "pre_execution_suspicious",
						"title": "On-Write Static AI - Suspicious"
					}
				],
				"detectionType": "static",
				"engines": [
					"On-Write DFI - Suspicious"
				],
				"fileExtension": "EXE",
				"fileExtensionType": "Executable",
				"filePath": "\\Device\\HarddiskVolume3\\ProgramData\\Lenovo\\ImController\\SystemPluginData\\LenovoSystemUpdatePlugin\\session\\Repository\\usbcg2dkfw1116_5\\usbcg2dkfw1116_5_versionsfx.exe",
				"fileSize": 17040568,
				"fileVerificationType": "SignedVerified",
				"identifiedAt": "2022-05-27T11:20:54.551000Z",
				"incidentStatus": "resolved",
				"incidentStatusDescription": "Resolved",
				"initiatedBy": "agent_policy",
				"initiatedByDescription": "Agent Policy",
				"mitigationStatus": "not_mitigated",
				"mitigationStatusDescription": "Not mitigated",
				"originatorProcess": "Lenovo.Modern.ImController.PluginHost.Device.exe",
				"processUser": "NT AUTHORITY\\SYSTEM",
				"publisherName": "LENOVO",
				"sha1": "cc76ef37e1aae0c2c8b10f9300f249ebefcb3835",
				"storyline": "123354642",
				"threatId": "1429600455345937931",
				"threatName": "usbcg2dkfw1116_5_versionsfx.exe",
				"updatedAt": "2022-07-20T06:50:32.148494Z"
			},
			"whiteningOptions": [
				"path",
				"hash",
				"certificate"
			]
		},
		{
			"agentDetectionInfo": {
				"agentDetectionState": "slim_mode",
				"agentDomain": "WORKGROUP",
				"agentIpV4": "100.64.0.1,192.168.2.69",
				"agentIpV6": "fe80::31bd:1270:bd98:eab6,fe80::5896:5a73:747d:cad4",
				"agentLastLoggedInUserName": "SG01227WL",
				"agentMitigationMode": "detect",
				"agentOsName": "Windows 10 Pro",
				"agentOsRevision": "19044",
				"agentRegisteredAt": "2022-05-27T08:30:11.211680Z",
				"agentUuid": "43212c10a64648eda66c00c50f36ec32",
				"agentVersion": "22.0.0.77",
				"cloudProviders": {},
				"externalIp": "102.13.193.147",
				"groupId": "1428013552422669853",
				"groupName": "Default Group",
				"siteId": "1428013552405892636",
				"siteName": "Default site"
			},
			"agentRealtimeInfo": {
				"accountId": "1428013551617363473",
				"accountName": "Wechain Limited",
				"activeThreats": 0,
				"agentComputerName": "SG08227WL",
				"agentDomain": "WORKGROUP",
				"agentId": "1429321527466176435",
				"agentMachineType": "laptop",
				"agentMitigationMode": "detect",
				"agentNetworkStatus": "connected",
				"agentOsName": "Windows 10 Pro",
				"agentOsRevision": "19044",
				"agentOsType": "windows",
				"agentUuid": "45812c29a77648eda90c12c50f41ec32",
				"agentVersion": "22.1.1.77",
				"groupId": "1428013662422661238",
				"groupName": "Default Group",
				"networkInterfaces": [
					{
						"id": "12494721521244180790",
						"inet": [
							"192.168.1.1"
						],
						"inet6": [
							"fe80::5896:5a73:747d:cad4"
						]
					},
					{
						"id": "1455546855015318358",
						"inet": [
							"100.64.0.1"
						],
						"inet6": [
							"fe80::31bd:1270:bd98:eab6"
						],
						"name": "Local Area Connection",
						"physical": "00:ff:79:9a:15:d3"
					}
				],
				"operationalState": "na",
				"scanStatus": "none",
				"siteId": "1428013552405892636",
				"siteName": "Default site"
			},
			"id": "1429644883595270399",
			"indicators": [
				{
					"category": "General",
					"description": "This binary imports functions used to raise kernel exceptions",
					"tactics": []
				},
				{
					"category": "General",
					"description": "This binary imports debugger functions",
					"tactics": []
				},
				{
					"category": "General",
					"description": "This binary creates a System Service",
					"tactics": []
				}
			],
			"mitigationStatus": [],
			"threatInfo": {
				"analystVerdict": "suspicious",
				"analystVerdictDescription": "Suspicious",
				"certificateId": "LENOVO",
				"classification": "Malware",
				"classificationSource": "Static",
				"collectionId": "1429538443743635758",
				"confidenceLevel": "suspicious",
				"createdAt": "2022-05-27T12:49:10.883218Z",
				"detectionEngines": [
					{
						"key": "pre_execution_suspicious",
						"title": "On-Write Static AI - Suspicious"
					}
				],
				"detectionType": "static",
				"engines": [
					"On-Write DFI - Suspicious"
				],
				"fileExtension": "EXE",
				"fileExtensionType": "Executable",
				"filePath": "\\Device\\HarddiskVolume3\\ProgramData\\Lenovo\\ImController\\SystemPluginData\\LenovoSystemUpdatePlugin\\session\\Repository\\usbcg2dkfw1116_5\\usbcg2dkfw1116_5_versionsfx.exe",
				"fileSize": 17040568,
				"fileVerificationType": "SignedVerified",
				"identifiedAt": "2022-05-27T12:49:10.870182Z",
				"incidentStatus": "resolved",
				"incidentStatusDescription": "Resolved",
				"initiatedBy": "agent_policy",
				"initiatedByDescription": "Agent Policy",
				"mitigationStatus": "not_mitigated",
				"mitigationStatusDescription": "Not mitigated",
				"originatorProcess": "Lenovo.Modern.ImController.PluginHost.Device.exe",
				"processUser": "NT AUTHORITY\\SYSTEM",
				"publisherName": "LENOVO",
				"sha1": "cc76ef37e1aae0c2c8b10f9300f249ebefcb3835",
				"storyline": "12312481",
				"threatId": "213134511",
				"threatName": "usbcg2dkfw1116_5_versionsfx.exe",
				"updatedAt": "2022-07-20T06:50:30.392870Z"
			},
			"whiteningOptions": [
				"path",
				"hash",
				"certificate"
			]
		},
		{
			"agentRealtimeInfo": {
				"activeThreats": 0,
				"agentComputerName": "SY00020CL",
				"agentDomain": "WORKGROUP",
				"agentId": "1a244b4f2bd04e84ab21e8e29bd6a712",
				"agentMachineType": "laptop",
				"agentMitigationMode": "detect",
				"agentNetworkStatus": "connected",
				"agentOsName": "Windows 10 Pro",
				"agentOsRevision": "19044",
				"agentOsType": "windows",
				"agentUuid": "1a244b4f2bd04e84ab21e8e29bd6a712",
				"agentVersion": "22.1.4.10010",
				"groupId": "1428013552422669853",
				"groupName": "Default Group",
				"networkInterfaces": [
					{
						"id": "1532415148817054013",
						"inet": [
							"192.168.1.67"
						],
						"inet6": [
							"fe80::1c52:24a8:e3de:6419"
						]
					},
					{
						"id": "1539482506864204775",
						"inet": [
							"100.64.0.1"
						],
						"inet6": [
							"fe80::a092:3d0b:8689:a965"
						],
						"name": "Local Area Connection",
						"physical": "00:ff:80:6e:41:4d"
					}
				],
				"userActionsNeeded": []
			},
			"id": "1429715437258255680",
			"indicators": [
				{
					"category": "General",
					"description": "This binary imports functions used to raise kernel exceptions",
				},
				{
					"category": "General",
					"description": "This binary imports debugger functions",
				},
				{
					"category": "General",
					"description": "This binary creates a System Service",
				}
			],
			"mitigationStatus": [],
			"threatInfo": {
				"analystVerdict": "suspicious",
				"analystVerdictDescription": "Suspicious",
				"certificateId": "LENOVO",
				"classification": "Malware",
				"classificationSource": "Static",
				"collectionId": "1429538443743635758",
				"confidenceLevel": "suspicious",
				"createdAt": "2022-05-27T15:09:21.534426Z",
				"detectionEngines": [
					{
						"key": "pre_execution_suspicious",
						"title": "On-Write Static AI - Suspicious"
					}
				],
				"detectionType": "static",
				"engines": [
					"On-Write DFI - Suspicious"
				],
				"fileExtension": "EXE",
				"fileExtensionType": "Executable",
				"filePath": "\\Device\\HarddiskVolume3\\ProgramData\\Lenovo\\ImController\\SystemPluginData\\LenovoSystemUpdatePlugin\\session\\Repository\\usbcg2dkfw1116_5\\usbcg2dkfw1116_5_versionsfx.exe",
				"fileSize": 17040568,
				"fileVerificationType": "SignedVerified",
				"identifiedAt": "2022-05-27T15:09:21.376000Z",
				"incidentStatus": "resolved",
				"incidentStatusDescription": "Resolved",
				"initiatedBy": "agent_policy",
				"initiatedByDescription": "Agent Policy",
				"mitigationStatus": "not_mitigated",
				"mitigationStatusDescription": "Not mitigated",
				"originatorProcess": "Lenovo.Modern.ImController.PluginHost.Device.exe",
				"processUser": "NT AUTHORITY\\SYSTEM",
				"publisherName": "LENOVO",
				"sha1": "cc76ef37e1aae0c2c8b10f9300f249ebefcb3835",
				"storyline": "512349451",
				"threatId": "1429715437258255680",
				"threatName": "usbcg2dkfw1116_5_versionsfx.exe",
				"updatedAt": "2022-07-20T06:50:32.506529Z"
			},
			"whiteningOptions": [
				"path",
				"hash",
				"certificate"
			]
		}
	]

agent=[
		{
			"activeThreats": 0,
			"agentVersion": "20.1.1.6226",
			"appsVulnerabilityStatus": "up_to_date",
			"computerName": "BJ01071CL’s MacBook",
			"consoleMigrationStatus": "N/A",
			"coreCount": 8,
			"cpuCount": 1,
			"cpuId": "Apple M1 Pro",
			"createdAt": "2022-05-26T08:06:50.198611Z",
			"externalIp": "42.200.60.162",
			"groupId": "1428013552422669853",
			"groupIp": "42.200.60.x",
			"groupName": "Default Group",
			"id": "1428777999118110501",
			"lastActiveDate": "2022-12-13T03:59:57.479609Z",
			"lastIpToMgmt": "192.168.152.85",
			"lastLoggedInUserName": "BJ01071CL",
			"licenseKey": "SSW24AndCaoYpZlIGEgaBV5Cg==",
			"locationType": "fallback",
			"networkStatus": "connected",
			"operationalState": "na",
			"osArch": "64 bit",
			"osName": "OS X",
			"osRevision": "12.5 (21G72)",
			"osStartTime": "2022-12-03T01:13:49Z",
			"osType": "macos",
			"osUsername": "hk00071ml",
			"rangerStatus": "Enabled",
			"rangerVersion": "21.11.0.66",
			"registeredAt": "2022-05-26T08:06:50.193601Z",
			"scanStatus": "none",
			"serialNumber": "HSDXW19JGH",
			"siteId": "1428013552405892636",
			"siteName": "Default site",
			"totalMemory": 16384,
			"updatedAt": "2022-12-12T22:14:47.383572Z",
			"uuid": "2D0CF8B9-B19D-55F6-B528-CB7F64839A63"
		},
		{
			"activeThreats": 0,
			"agentVersion": "20.1.1.6226",
			"appsVulnerabilityStatus": "up_to_date",
			"computerName": "VK00035CL’s MacBook",
			"consoleMigrationStatus": "N/A",
			"coreCount": 8,
			"cpuCount": 1,
			"cpuId": "Apple M1 Pro",
			"createdAt": "2022-05-26T09:31:36.043314Z",
			"groupId": "1428013552422669853",
			"groupIp": "42.200.60.x",
			"groupName": "Default Group",
			"id": "1428820662253284241",
			"lastActiveDate": "2022-12-13T05:56:54.479509Z",
			"lastIpToMgmt": "192.168.1.76",
			"lastLoggedInUserName": "VK00035CL’s",
			"licenseKey": "SSBkb24ndCBoWXAWQA2fga2V5Cg==",
			"locationType": "fallback",
			"locations": [
				{
					"id": "1317191169200882643",
					"name": "Fallback",
					"scope": "global"
				}
			],
			"machineType": "laptop",
			"mitigationMode": "protect",
			"mitigationModeSuspicious": "detect",
			"modelName": "MacBookPro18,3",
			"networkStatus": "connected",
			"operationalState": "na",
			"osArch": "64 bit",
			"osName": "OS X",
			"osRevision": "13.0.1 (22A400)",
			"osStartTime": "2022-12-05T04:09:38Z",
			"osType": "macos",
			"osUsername": "VK00035CL",
			"rangerStatus": "Enabled",
			"rangerVersion": "21.11.0.66",
			"registeredAt": "2022-05-26T09:31:36.036858Z",
			"remoteProfilingState": "disabled",
			"scanStatus": "none",
			"serialNumber": "T369WA4R3XR",
			"siteId": "1428013552405892636",
			"siteName": "Default site",
			"tags": {
				"sentinelone": []
			},
			"totalMemory": 16384,
			"updatedAt": "2022-12-13T05:45:59.136604Z",
			"uuid": "E5F2C6B1-AC1A-53F4-8F1F-6530B42C8961"
		}
	]
