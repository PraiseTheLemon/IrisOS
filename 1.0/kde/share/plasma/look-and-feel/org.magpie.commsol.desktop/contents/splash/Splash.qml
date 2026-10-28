import QtQuick
import QtQuick.Controls

Rectangle {
    id: background
    anchors.centerIn: parent
    color: "black"

    Image {
        id: spinner
        source: "./spinner.svg"
        anchors.centerIn: parent
        RotationAnimator {
            target: spinner;
            from: 0;
            to: 360;
            loops: Animation.Infinite
            duration: 1000
            running: true
        }
    }

    // NumberAnimation on rotation {
    //     target: spinner
    //     from: 0; to: 360; running: spinner.visible == true;
    //     loops: Animation.Infinite; duration: 700;
    // }
    // Rectangle {
    //     id: groove
    //     width: 360
    //     height: 12
    //     anchors.centerIn: parent
    //     color: "#100f1d"
    //     radius: 6
    //
    //     Rectangle {
    //         id: block
    //         height: 8
    //         width: 48
    //         radius: 4
    //         anchors.verticalCenter: parent.verticalCenter
    //         color: "#c6c2e6"
    //
    //         SequentialAnimation on x {
    //             id: anim
    //             loops: Animation.Infinite
    //
    //             NumberAnimation  {
    //                 from: 0
    //                 to: groove.width - block.width
    //                 duration: 1100
    //                 easing.type: Easing.OutQuad
    //             }
    //             NumberAnimation  {
    //                 from: groove.width - block.width
    //                 to: 0
    //                 duration: 1100
    //                 easing.type: Easing.OutQuad
    //             }
    //         }
    //     }
    // }
}
