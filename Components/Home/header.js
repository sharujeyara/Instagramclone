import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Header = () => {
    return (

        <View style={styles.headercontainer}>
            <Image source={require('../../assets/logo.png')}
                style={styles.logo} />

            <View style={styles.iconcontainer}>
                <TouchableOpacity>
                <Image source={{ uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAABmJLR0QA/wD/AP+gvaeTAAAA5UlEQVRYhe2YsQ6EIAyG9XKrxhlm370O7L5T49C+gDc4nIneFQTuHP5vIkDol6YpaNMAAP7BOI4hBFVdK6Cq0zR57xNslmWpobKHmWOdQgi1bTaI6Bi9PU6patd1sfnMQESGYbCF1nV9L7cnGzL5fv6jeLxMIGTxzD+ibM3dLkMQsoCQBYQsEvrQvt+k7onvT7fLEIQsEmroUx3gLvstELKAkMXthAq8qct+u90uQxCyOKkhVe37fhvHvIEuIyLHyZMMzfNcT+JKIO89M9f+OcTMzrlYd+ccEYlIDRURIaIEGwBAUV48thbCQrYiCQAAAABJRU5ErkJggg==" }}
                    style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={{ uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAABmJLR0QA/wD/AP+gvaeTAAAFDElEQVRYhe2YSSxzbRTHn7ptUmmpSsRYFshNqRiKmMJCxMYY5NWNWEiFELt2iSCxJTUGiSGxMTSxMEtsxBAhRIkFOpAIrbED6e15F8+XRn1U9a12479pe5/nf+6vp+dJz7kI/epXv/rVJ6LZXyZJsqSkJC8vLzQ0lMfj0el0nU53dHS0vr4+NTV1cnJix8vn88vLy7Ozs2NjY/39/c1ms1qt1mg0y8vLcrn89PTUGd7k5OTV1VX4XBaLZWFhISEh4f/exMTEhYUFi8Vix76ysiIUCr8BxGAwZDIZDqrVaoeGhoqKikiSZLFYTCaTx+MVFhb29fXpdDoAMJvNra2tBEFgL0EQ7e3tZrMZe3t7ewsKCng8HpPJZLFYJEkWFxcPDw9rtVr8xbq7u+l0+tdMXC53bW0NAPR6fVtbm6+v72c7fXx8WlpaTCYTAIyNjREEQRDExMQEAJhMpubmZh8fn8+8vr6+7e3tBoMBp83Pz++LPGEmlUqVmJj49ZdAKCEhQalUAsDExARmuri4iI+Pd8QrFArVajUms5czmUyGmUJCQhyJixUREaFSqXDFKJXK8PBwx70hISGYrKur6+MdycnJFotFr9c7mKe3EgqFJpPJZDIlJSV915uUlGQwGCiK+tiLz11bW9t342JJJBKJROKct6OjAwCWl5ffL5Akic+OnRq3L1zyznk5HA4+19HR0fiKF34pLS1FCM3Ozj4+PjoXmqIoiqKc8z48PMjlcoRQSUmJDVZubi5CaG5uzrm4/y5867y8PBusiIgIhNDR0ZGnsBQKBULo/Sl+enoCADab7RkohNhsNgA8PT3hj/9lC1er2Wz2FJbFYkEIeXl52WDd3d0hhPz9/T2FhW+t0+lssG5vbxFCwcHBnsLCt9ZqtTZYBwcHCKGUlBRPYaWmpiKE9vf3bbC2trYQQunp6Z7CSktLQwhtb2/bXOXz+QBwd3fHZDLdz+Tt7f3w8AAAJEm+X9vd3QWAiooK92NVVlYCwPtUYTU2NgLA7u4ujfZFg+9a0Wi0vb09AKirq/tg2dvb++rqCgDKysrciVVeXg4AGo3m0/ppaGgAALVazeFw3MPE4XA0Gg0A1NfXf7qJTqfv7OwAwMjIiHuwRkdHAWBzc/OLpiguLg5PDbW1tT/NVFdXBwBGozEmJubr3TU1NQDw8vJibTN+Qvn5+S8vLwBQXV3tqAfPGs/PzxkZGT/BlJWVpdfr7U0WH4ogiMnJSUzm8pzl5OQ8Pj4CwNTU1Lf7bAaDIZfL8W8vEolcxSQSiYxGIwBMT08zGAxnQhAEMTw8jAfAgYEBh6Zyu9E6OzvxM4Tx8fF/ikaj0VpaWiiKAoD5+Xkul+tcHC6Xu7i4CAAURTU3N7vmj6SwsPD+/h4Azs7OnOgyMjMzz8/PcStQUFDgAiCroqKiDg8P8SOazs5OB8uCTqdLpdLX11cAOD4+5vP5rmTCYrPZg4ODuNQ2NjYiIyPt74+KitrY2MAPjPr7+1ksluuZrMrPz7+8vAQAg8EglUqtQ8Fb0Wg0sViMp6nr6+uioqIfBLIqICBgZmYGp21xcTEsLOztalhY2NLSEl6dnp4OCAhwB5NVFRUVNzc3AHB/f//nzx98sbi4+Pb2Fle3WCx2K5BVQUFBs7OzODEymaynpwe/n5mZCQwM9AyTVVVVVc/PzxjIaDQ2NTV5GMgqgUCgUCgUCoVAIPA0i604HI7betpf2eovGPLtFlgFzjwAAAAASUVORK5CYII=" }}
                    style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.unread}>
                        <Text style={styles.unreadtext}>11</Text>
                    </View>
                <Image source={{ uri:"data:image/png;base64,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" }}
                    style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    headercontainer: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logo: {
        width: 150,
        height: 50,
        resizeMode: "contain",
        marginTop:20
    },
    iconcontainer: {
        flexDirection: "row",
        marginTop:20
    },
    icon: {
        height: 30,
        width: 30,
        marginLeft:10
    },
    unread:{
        backgroundColor:"#ff3250",
        position:"absolute",
        left:20,
        width:25,
        height:18,
        bottom:18,
        zIndex:10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:25
        
    },
    unreadtext:{
        color:"white",
        fontWeight:"600"
    }
})

export default Header;
