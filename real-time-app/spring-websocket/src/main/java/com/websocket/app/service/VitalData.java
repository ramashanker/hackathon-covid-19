package com.websocket.app.service;

import java.time.chrono.IsoEra;

public class VitalData {
    double spo2;
    double bloodPress;
    double bodyTemp;
    double pulseRate;
    double respRate;
 //   String timestamp;

    public VitalData() {

    }

    public double getSpo2() {
        return spo2;
    }

    public void setSpo2(final double spo2) {
        this.spo2 = spo2;
    }

    public double getBloodPress() {
        return bloodPress;
    }

    public void setBloodPress(final double bloodPress) {
        this.bloodPress = bloodPress;
    }

    public double getBodyTemp() {
        return bodyTemp;
    }

    public void setBodyTemp(final double bodyTemp) {
        this.bodyTemp = bodyTemp;
    }

    public double getPulseRate() {
        return pulseRate;
    }

    public void setPulseRate(final double pulseRate) {
        this.pulseRate = pulseRate;
    }

    public double getRespRate() {
        return respRate;
    }

    public void setRespRate(final double respRate) {
        this.respRate = respRate;
    }

  /*  public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(final String timestamp) {
        this.timestamp = timestamp;
    }*/

    public VitalData(final double spo2,
                     final double bloodPress,
                     final double bodyTemp,
                     final double pulseRate,
                     final double respRate,
                     final String timestamp) {
        this.spo2 = spo2;
        this.bloodPress = bloodPress;
        this.bodyTemp = bodyTemp;
        this.pulseRate = pulseRate;
        this.respRate = respRate;
      //  this.timestamp = timestamp;
    }

    @Override
    public String toString() {
        return "{\"spo2\":" + spo2 + ", \"bloodPress\":\"" + bloodPress + ", \"bodyTemp\":\"" + bodyTemp + ", \"pulseRate\":\"" + pulseRate + ", \"respRate\":\"" + respRate+ "\"}";
    }
}
