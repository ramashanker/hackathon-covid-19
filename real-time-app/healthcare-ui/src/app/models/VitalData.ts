export  class  VitalData{
    constructor(
        public bodyTemp: number,
        public pulseRate: number,
        public respRate: number,
        public bloodPress: number,
        public spo2: number,
        public timestamp:String,
        public patient:String,
    ) {  }
}