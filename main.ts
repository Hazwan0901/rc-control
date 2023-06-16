bluetooth.onBluetoothConnected(function () {
    bluetooth.startUartService()
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusSource.MICROBIT_ID_BUTTON_A) {
        basic.showNumber(1)
    }
})
basic.showString("BLE")
basic.forever(function () {
	
})
