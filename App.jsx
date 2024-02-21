import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";


export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: Math.random().toString(), value: task }]);
      setTask("");
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder="Digite uma nova tarefa"
          style={styles.inputLine}
          onChangeText={setTask}
          value={task}
        />
        <TouchableOpacity onPress={addTask}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listTitle}>
        {tasks.length === 0 ? (
          <Text style={styles.emptyList}>Nenhuma Tarefa Cadastrada</Text>
        ) : (
          <Text style={styles.filledList}>Tarefas Cadastradas</Text>
        )}
      </View>

      <ScrollView style={styles.scrollList} showsVerticalScrollIndicator={false}>
        {tasks.map((task) => (
          <View
            key={task.id}
            style={styles.listItem}
          >
            <Text style={styles.widthText}>{task.value}</Text>
            <TouchableOpacity
              onPress={() => removeTask(task.id)}
              style={styles. removeButton}
            >
              <Text style={styles.buttonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },

  form: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },

  inputLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: "75%"
  },

  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5
  },

  buttonText: {
    color: "white",
  },

  listTitle: {
    marginBottom: 10,
    alignItems: "center"
  },

  emptyList: {
    textAlign: "center",
    color: "red",
    fontSize: 20
  },

  filledList: {
    textAlign: "center",
    color: "green",
    fontSize: 20
  },

  scrollList: {
    marginBottom: 24,
  },

  listItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 5,
  },

  widthText: {
    width: "75%",
  },

  removeButton: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 10,
  },


});
