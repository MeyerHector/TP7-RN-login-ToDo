import { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  TouchableOpacity,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Button, Text } from "react-native-paper";
import tasksData from "./data.json";
import { router } from "expo-router";

type Task = {
  id: number;
  titulo: string;
  descripcion: string;
};

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(tasksData.tareas);
  }, []);

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Button
          buttonColor="#000000"
          mode="contained"
          onPress={() => router.navigate("AddTaskScreen")}
          style={styles.button}
        >
          Agregar Tarea
        </Button>
        <FlatList
          data={tasks}
          keyExtractor={(task) => task.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.task}>
              <View style={styles.more}>
                <Text style={styles.title}>{item.titulo}</Text>
                <TouchableOpacity onPress={() => removeTask(item.id)}>
                  <Text style={styles.remove}>❌</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.description}>{item.descripcion}</Text>
            </View>
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  more: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    width: "90%",
    margin: 10,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    borderColor: "#ccc",
  },
  task: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  description: {},
  remove: {
    marginLeft: "auto",
    backgroundColor: "#F5B9B9",
    padding: 8,
    borderRadius: 5,
  },
});

export default TaskList;
