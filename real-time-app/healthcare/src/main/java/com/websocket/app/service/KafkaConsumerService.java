package com.websocket.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class KafkaConsumerService {

	@Autowired
	private SimpMessagingTemplate webSocket;
	
	@KafkaListener(topics="${kafka.topic}")
	public void consume(@Payload String message) throws IOException {
		System.out.println(message);
		webSocket.convertAndSend("/topic/patient", message);
	}
}
