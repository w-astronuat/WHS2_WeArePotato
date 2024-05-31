#!/usr/bin/python
from __future__ import annotations


DOCUMENTATION = """
module: test1
short_description: Foo module in testcol3
description:
    - This is a foo module.
author:
    - me
"""

from ansible.module_utils.basic import AnsibleModule


def main():
    module = AnsibleModule(
        argument_spec=dict(),
    )

    module.exit_json()


if __name__ == '__main__':
    main()
