SentinelOne Management SDK
==================

Package Structure
------------------
management is the base of the project,
each SDK version represents the API version of the console it communicates with and
represented in a library under management.

Installation
------------

```bash
pip install SentinelOne
```

Getting Started
---------------

```python

import os
from management.mgmtsdk_v2.mgmt import Management

mgmt = Management(hostname=os.environ.get('MGMT_HOST'), username=os.environ.get('MGMT_USER'), password=os.environ.get('MGMT_PASSWORD'))

mgmt.agents.get()
# <management.mgmtsdk_v2.client.ManagementResponse object at 0x101a7e9d0>
    
resolved_threats = mgmt.threats.get(resolved=True)
resolved_threats.data
# [<management.mgmtsdk_v2.entities.threat.Threat object at 0x101a99210>, <management.mgmtsdk_v2.entities.threat.Threat object at 0x101a99150>]

```

To use the SentinelOne Management SDK, you will need a running SentinelOne management
with credentials.

For security purposes we recommend to use env variables for your credentials and host.

By default, all responses are returned as `ManagementResponse` object.
`ManagementResponse` object has response_code, data, json and error attributes.

Data should contain either a list of a `objects`, a `dictionary` with data, or simple
confirmation that the request was successful, depending on the request being made.

By default, ``Exception`` is thrown upon a non-200 response status code, a bad filter
query param, or other unsuccessful communication with the Management console.


