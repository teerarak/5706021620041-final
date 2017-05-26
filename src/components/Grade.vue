<template>
  <div class="Grade">
    <button type="button" class="button" name="button" v-show="eiei" @click="ch()">เพิ่มวิชา</button>
    <div v-if="show">
      <div v-if="s1">
        <h1>เทอม 2/2558</h1>
        <b-table
        :data="gradeTerm1"
        :paginated="true"
        :per-page="10">
        <template scope="props">
            <b-table-column field="id" label="วิชา"  sortable>
                {{ props.row.subject }}
            </b-table-column>
            <b-table-column field="cadit" label="หน่วยกิจ"  sortable>
                {{ props.row.cadit }}
            </b-table-column>
            <b-table-column field="grade" label="เกรด" width="40" sortable>
                {{ props.row.grade }}
            </b-table-column>
        </template>
        </b-table>
        <p>เกรดเฉลี่ย : {{getAvgGrade(gradeTerm1)}}</p>
      </div>
      <div v-if="s2">
        <h1>เทอม 1/2559</h1>
        <b-table
        :data="gradeTerm2"
        :paginated="true"
        :per-page="10">
        <template scope="props">
            <b-table-column field="id" label="วิชา"  sortable>
                {{ props.row.subject }}
            </b-table-column>
            <b-table-column field="cadit" label="หน่วยกิจ"  sortable>
                {{ props.row.cadit }}
            </b-table-column>
            <b-table-column field="grade" label="เกรด" width="40" sortable>
                {{ props.row.grade }}
            </b-table-column>
        </template>
        </b-table>
        <p>เกรดเฉลี่ย : {{getAvgGrade(gradeTerm2)}}</p>
      </div>
      <div v-show="s3">
        <h1>เทอม 2/2559</h1>
        <b-table
        :data="gradeTerm3"
        :paginated="true"
        :per-page="10">
        <template scope="props">
            <b-table-column field="id" label="วิชา"  sortable>
                {{ props.row.subject }}
            </b-table-column>
            <b-table-column field="cadit" label="หน่วยกิจ"  sortable>
                {{ props.row.cadit }}
            </b-table-column>
            <b-table-column field="grade" label="เกรด" width="40" sortable>
                {{ props.row.grade }}
            </b-table-column>
        </template>
        </b-table>
        <p>เกรดเฉลี่ย : {{getAvgGrade(gradeTerm3)}}</p>
      </div>
    </div>
    <div class="columns" v-else>
      <div class="column is-6 is-offset-3">
        <b-field label="ชื่อวิชา">
          <b-input name="subject" v-model="subject" placeholder="ชื่อวิชา"></b-input>
        </b-field>
        <b-field label="เทอม">
          <b-select placeholder="เลือกเทอม" v-model="term">
              <option
                  v-for="option in options"
                  :value="option.term"
                  :key="option.id">
                  {{ option.term }}
              </option>
          </b-select>
        </b-field>
        <b-field label="หน่วยกิจ">
          <b-input name="cadit" v-model="cadit" placeholder="หน่วยกิจ"></b-input>
        </b-field>

        <b-field label="เกรดที่ได้รับ">
          <b-select placeholder="เลือกเกรด" v-model="grade">
              <option
                  v-for="grade in grades"
                  :value="grade.grade"
                  :key="grade.id">
                  {{ grade.grade }}
              </option>
          </b-select>
        </b-field>
        <button type="button" name="button" @click="addSubject()" class="button">ยืนยัน</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Grade',
  data () {
    return {
      eiei: false,
      show: false,
      term: '',
      subject: '',
      grade: '',
      cadit: '',
      options: [
        {'id': '1', 'term': '2/2558'},
        {'id': '2', 'term': '1/2559'},
        {'id': '3', 'term': '2/2559'}
      ],
      grades: [
        {'id': '1', 'grade': 'A', 'cadit': '4'},
        {'id': '2', 'grade': 'B+', 'cadit': '3.5'},
        {'id': '3', 'grade': 'B', 'cadit': '3'},
        {'id': '4', 'grade': 'C+', 'cadit': '2.5'},
        {'id': '5', 'grade': 'C', 'cadit': '2'},
        {'id': '6', 'grade': 'D+', 'cadit': '1.5'},
        {'id': '7', 'grade': 'D', 'cadit': '1'},
        {'id': '8', 'grade': 'F', 'cadit': '0'}
      ],
      gradeTerm1: [],
      gradeTerm2: [],
      gradeTerm3: [],
      s2: false,
      s1: false,
      s3: false
    }
  },
  methods: {
    getAvgGrade (grade) {
      let sum = 0
      let count = 0
      grade.forEach(function (element) {
        count += parseInt(element.cadit)
        if (element.grade === 'A') {
          sum += (element.cadit * 4)
        }
        if (element.grade === 'B+') {
          sum += (element.cadit * 3.5)
        }
        if (element.grade === 'B') {
          sum += (element.cadit * 3)
        }
        if (element.grade === 'C+') {
          sum += (element.cadit * 2.5)
        }
        if (element.grade === 'C') {
          sum += (element.cadit * 2)
        }
        if (element.grade === 'D+') {
          sum += (element.cadit * 1.5)
        }
        if (element.grade === 'D') {
          sum += (element.cadit * 1)
        }
        if (element.grade === 'F') {
          sum += (element.cadit * 0)
        }
        console.log(sum + ' ' + count)
        console.log(sum / count)
      })
      let eiei = sum / count
      return eiei.toFixed(2)
    },
    ch () {
      this.eiei = false
      this.show = false
    },
    addSubject () {
      let todo = {
        subject: this.subject,
        term: this.term,
        cadit: this.cadit,
        grade: this.grade
      }
      if (this.term === '2/2558') {
        this.gradeTerm1.push(todo)
        this.s1 = true
      }
      if (this.term === '1/2559') {
        this.gradeTerm2.push(todo)
        this.s2 = true
      }
      if (this.term === '2/2559') {
        this.gradeTerm3.push(todo)
        this.s3 = true
      }
      this.subject = ''
      this.term = ''
      this.cadit = ''
      this.grade = ''
      this.show = true
      this.eiei = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
