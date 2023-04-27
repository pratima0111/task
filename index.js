const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Student schema
const studentSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    default: ''
  },
  lastName: {
    type: String,
    trim: true,
    default: ''
  },
  displayName: {
    type: String,
    trim: true
  },
  municipality: {
    type: String
  }
});

// Define the WorksnapsTimeEntry schema
const worksnapsTimeEntrySchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student'
  },
  timeEntries: {
    type: Object
  }
});

// Create the Student model based on the schema
const Student = mongoose.model('Student', studentSchema);

// Create the WorksnapsTimeEntry model based on the schema
const WorksnapsTimeEntry = mongoose.model('WorksnapsTimeEntry', worksnapsTimeEntrySchema);

// Connect to the database
mongoose.connect('mongodb+srv://pratimasingh160101:12345@cluster0.p2rbx5q.mongodb.net/?retryWrites=true&w=majorit', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to the database!');
}).catch((err) => {
  console.log('Failed to connect to the database:', err);
});

// Loop through each student and show its time entries
WorksnapsTimeEntry.find().populate('student').then((entries) => {
    entries.forEach((entry) => {
      console.log(`Student: ${entry.student.displayName}`);
      console.log(`Time entries: ${JSON.stringify(entry.timeEntries)}`);
    });
  }).catch((err) => {
    console.log('Error:', err);
  });