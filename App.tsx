/**
 * My To Do List App
 *
 * @format
 */


import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';


function App() {
  // const [tasks, setTasks] = useState<string[]>([]);
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);


  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask(''); 
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ToDoList tasks={tasks} />
      </ScrollView>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <Button title="Add" onPress={handleAddTask} />
      </View>
    </SafeAreaView>
  );
}


//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <Pressable>
//           <View style={[styles.task, styles.completed]}>
//             <Text style={styles.taskText}>Do laundry</Text>
//           </View>
//         </Pressable>
//         <Pressable>
//           <View style={[styles.task]}>
//             <Text style={styles.taskText}>Go to gym</Text>
//           </View>
//         </Pressable>
//         <Pressable>
//           <View style={[styles.task, styles.completed]}>
//             <Text style={styles.taskText}>Walk dog</Text>
//           </View>
//         </Pressable>
//       </ScrollView>
//       <View style={styles.form}>
//       <TextInput
//           style={styles.input}
//           placeholder="Add a new task..."
//         />
//         <Button title="Add" />
//       </View>
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default App;



// function App() {
//   return (
//     <SafeAreaView>
//       <StatusBar barStyle="dark-content" />
//       <ScrollView>
//         <View style={styles.container}>
//           <ToDoList />
//           <ToDoForm />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//   },
// });

// export default App;

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';


// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }




// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits. HELLOOO
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
