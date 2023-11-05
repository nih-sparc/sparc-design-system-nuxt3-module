<template>
  <div>
    Nuxt module playground!
  </div>
  <el-button class="custom">Test Button</el-button>
  <div class="container">
    <sparc-logo />
  </div>
  <div class="tooltip">
    <sparc-tooltip v-for="dir in tooltipDirs" :key="dir" :placement="dir">
      <template v-slot:data>
        <div>
          {{ dir }}<br/>THIS IS <a href="#">ALOT</a> OF TEXT
        </div>
      </template>
      <template v-slot:item>
        <el-button>{{ dir }}</el-button>
      </template>
    </sparc-tooltip>
  </div>
  <sparc-tooltip placement="top-center" is-repeating-item-content>
    <template v-slot:data><div>Only show this tooltip if content is cutoff</div></template>
    <template v-slot:item><div class="tooltip-item">Only show tooltip when this has ellipsis</div></template>
  </sparc-tooltip>
  <el-button
    @click="openSuccessMessage">
    Show Success Notification
  </el-button>
  <el-button
    @click="openInfoMessage">
    Show Info Notification
  </el-button>
  <el-button
    @click="openFailMessage">
    Show Failure Notification
  </el-button>
  <el-button
    @click="openNotification">
    Show Notification
  </el-button>
  <el-button
    @click="openNotificationWithIcon">
    Show Notification with Icon
  </el-button>
  <el-table
    :data="tableData"
    :default-sort = "{prop: 'name', order: 'descending'}"
    empty-text="No Results"
  >
    <el-table-column
      :fixed="true"
      prop="name"
      label="Title"
      sortable
      width="160"
    >
      <template v-slot="scope">
        <a href="#">{{ scope.row.name }}</a>
      </template>
    </el-table-column>
    <el-table-column prop="banner" label="Image" width="160">
      <template v-slot="scope">
        <img
          :src="scope.row.banner"
          alt="Banner image"
          height="128"
          width="128"
        />
      </template>
    </el-table-column>
    <el-table-column prop="description" label="Description" :min-width="400" width="auto" sortable />
    <el-table-column width="40" />
    <el-table-column prop="createdAt" label="Last Published" width="150" sortable>
      Febuary 20, 2020
    </el-table-column>
    <el-table-column prop="size" label="Size" width="100" sortable>
      780.29 GB
    </el-table-column>
  </el-table>
  <el-button @click="openDialog">
    Show Dialog
  </el-button>
  <el-dialog
    v-model="dialogVisible"
    :show-close="true"
    title="Test Dialog"
    @close="dialogVisible = false"
  >
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra aliquet eget sit amet tellus cras adipiscing enim eu.
    </div>
    <template #footer>
      <el-button @click="dialogVisible = false">
        Close
      </el-button>
    </template>
  </el-dialog>
</template>

<script>
  import { ref } from 'vue'
  import { successMessage, infoMessage, failMessage, informationNotification, iconInformationNotification } from "./utils/notificationMessages.js"

  const tableData = [{
    "id": 37,
    "sourceDatasetId": 344,
    "name": "Mapping of ICN Neurons in a 3D Reconstructed Rat Heart",
    "description": "Single intrinsic cardiac nervous system (ICN) neurons were marked in an image volume of heart sections that was anatomically delineated for the 3D reconstruction of the whole heart with mapped locations of individual ICN neurons.",
    "ownerId": 467,
    "ownerFirstName": "Clara",
    "ownerLastName": "Leung",
    "ownerOrcid": "0000-0003-4479-7608",
    "organizationName": "SPARC Consortium",
    "organizationId": 367,
    "license": "Creative Commons Attribution",
    "tags": [
      "rattus norvegicus",
      "knife edge scanning microscopy",
      "rodent cardiac anatomy",
      "rat intrinsic cardiac neurons"
    ],
    "version": 2,
    "revision": null,
    "size": 55707640131,
    "modelCount": [
      { "modelName": "researcher", "count": 11 },
      { "modelName": "term", "count": 4 },
      { "modelName": "award", "count": 1 },
      { "modelName": "animal_subject", "count": 1 },
      { "modelName": "sample", "count": 1 },
      { "modelName": "protocol", "count": 0 },
      { "modelName": "summary", "count": 1 }
    ],
    "fileCount": 23,
    "recordCount": 19,
    "uri": "s3://blackfynn-discover-use1/37/2/",
    "arn": "arn:aws:s3:::blackfynn-discover-use1/37/2/",
    "status": "PUBLISH_SUCCEEDED",
    "doi": "10.26275/wcje-hxib",
    "banner": "https://assets.discover.pennsieve.io/dataset-assets/37/2/banner.jpg",
    "readme": "https://assets.discover.pennsieve.io/dataset-assets/37/2/readme.md",
    "contributors": [
      {
        "firstName": "Clara",
        "middleInitial": null,
        "lastName": "Leung",
        "degree": "M.S.",
        "orcid": "0000-0003-4479-7608"
      },
      {
        "firstName": "Jin",
        "middleInitial": null,
        "lastName": "Chen",
        "degree": null,
        "orcid": "0000-0001-7617-1664"
      },
      {
        "firstName": "Alison ",
        "middleInitial": null,
        "lastName": "Moss",
        "degree": null,
        "orcid": "0000-0002-7907-8796"
      },
      {
        "firstName": "Susan",
        "middleInitial": null,
        "lastName": "Tappan",
        "degree": null,
        "orcid": "0000-0001-5120-3770"
      },
      {
        "firstName": "Maci",
        "middleInitial": null,
        "lastName": "Heal",
        "degree": null,
        "orcid": "0000-0001-5097-1030"
      },
      {
        "firstName": "Todd",
        "middleInitial": null,
        "lastName": "Huffman",
        "degree": null,
        "orcid": null
      },
      {
        "firstName": "Navid",
        "middleInitial": null,
        "lastName": "Farahani",
        "degree": null,
        "orcid": null
      },
      {
        "firstName": "Leonard",
        "middleInitial": null,
        "lastName": "Eisenman",
        "degree": null,
        "orcid": null
      },
      {
        "firstName": "Zixi",
        "middleInitial": null,
        "lastName": "Cheng",
        "degree": null,
        "orcid": "0000-0002-3722-6455"
      },
      {
        "firstName": "Raj",
        "middleInitial": null,
        "lastName": "Vadigepalli",
        "degree": null,
        "orcid": "0000-0002-8405-1037"
      },
      {
        "firstName": "James",
        "middleInitial": null,
        "lastName": "Schwaber",
        "degree": null,
        "orcid": "0000-0003-0598-7345"
      }
    ],
    "sponsorship": {
      "title": "NIH SPARC Program",
      "imageUrl": "https://assets.discover.pennsieve.io/dataset-assets/sponsorships/sparc_logo.svg",
      "markup": "Explore this dataset in greater detail on the <a href=http://data.sparc.science/datasets/37>SPARC Portal</a> where you will find additional resources and related datasets."
    },
    "blackfynnSchemaVersion": "4.0",
    "createdAt": "2020-08-04T18:22:07.454864Z",
    "updatedAt": "2020-08-04T18:32:14.911827Z",
    "firstPublishedAt": "2019-08-14T20:25:02.609321Z",
    "versionPublishedAt": "2020-08-04T18:22:07.454864Z",
    "revisedAt": null,
    "embargo": false
  },
  {
    "id": 16,
    "sourceDatasetId": 66,
    "name": "Rat Vagus Nerve Stained with Masson's Trichrome",
    "description": "Micrographs of cross sections of cervical and abdominal rat vagus nerve stained with Masson's trichrome.",
    "ownerId": 238,
    "ownerFirstName": "Nicole",
    "ownerLastName": "Pelot",
    "ownerOrcid": "0000-0003-2844-0190",
    "organizationName": "SPARC Consortium",
    "organizationId": 367,
    "license": "Creative Commons Attribution",
    "tags": [
      "vagus nerve stimulation",
      "rattus norvegicus",
      "autonomic nervous system",
      "vagus nerve morphology",
      "neural anatomy",
      "vagus nerve"
    ],
    "version": 5,
    "revision": null,
    "size": 2760065720,
    "modelCount": [
      { "modelName": "researcher", "count": 7 },
      { "modelName": "term", "count": 5 },
      { "modelName": "award", "count": 1 },
      { "modelName": "animal_subject", "count": 10 },
      { "modelName": "sample", "count": 27 },
      { "modelName": "protocol", "count": 1 },
      { "modelName": "summary", "count": 1 }
    ],
    "fileCount": 163,
    "recordCount": 52,
    "uri": "s3://blackfynn-discover-use1/16/5/",
    "arn": "arn:aws:s3:::blackfynn-discover-use1/16/5/",
    "status": "PUBLISH_SUCCEEDED",
    "doi": "10.26275/z3ab-7j9y",
    "banner": "https://assets.discover.pennsieve.io/dataset-assets/16/5/banner.jpg",
    "readme": "https://assets.discover.pennsieve.io/dataset-assets/16/5/readme.md",
    "contributors": [
      {
        "firstName": "Nicole",
        "middleInitial": null,
        "lastName": "A. Pelot",
        "degree": null,
        "orcid": null
      },
      {
        "firstName": "J.",
        "middleInitial": null,
        "lastName": "Ashley Ezzell",
        "degree": null,
        "orcid": null
      },
      {
        "firstName": "Gabriel",
        "middleInitial": null,
        "lastName": "B. Goldhagen",
        "degree": null,
        "orcid": null
      },
      {
        "firstName": "Eric",
        "middleInitial": null,
        "lastName": "Musselman",
        "degree": null,
        "orcid": "0000-0001-5295-7267"
      },
      {
        "firstName": "Jake",
        "middleInitial": null,
        "lastName": "E. Cariello",
        "degree": null,
        "orcid": null
      },
      {
        "firstName": "Kara",
        "middleInitial": null,
        "lastName": "A. Clissold",
        "degree": null,
        "orcid": null
      },
      {
        "firstName": "Warren",
        "middleInitial": null,
        "lastName": "M. Grill",
        "degree": null,
        "orcid": null
      }
    ],
    "sponsorship": {
      "title": "NIH SPARC Program",
      "imageUrl": "https://assets.discover.pennsieve.io/dataset-assets/sponsorships/sparc_logo.svg",
      "markup": "Explore this dataset in greater detail on the <a href=http://data.sparc.science/datasets/16>SPARC Portal</a> where you will find additional resources and related datasets."
    },
    "blackfynnSchemaVersion": "4.0",
    "createdAt": "2020-08-04T17:57:13.145628Z",
    "updatedAt": "2020-08-04T18:10:08.448118Z",
    "firstPublishedAt": "2019-07-16T18:55:19.664Z",
    "versionPublishedAt": "2020-08-04T17:57:13.145628Z",
    "revisedAt": null,
    "embargo": false
  }]

  export default {
    name: 'App',
    setup() {
      const tooltipDirs = ref([
        'top-left',
        'top-center',
        'top-right',
        'left-top',
        'left-center',
        'left-bottom',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'right-top',
        'right-center',
        'right-bottom'
      ])
      const dialogVisible = ref(false)

      return {
        dialogVisible,
        tableData,
        tooltipDirs
      }
    },
    methods: {
      openSuccessMessage() {
        successMessage(`Success!`)
      },
      openFailMessage() {
        failMessage(`Failure.`)
      },
      openInfoMessage() {
        infoMessage(`Information`)
      },
      openNotification() {
        informationNotification('Notification Title', 'This is a notification.')
      },
      openNotificationWithIcon() {
        iconInformationNotification('Notification Title', 'This is a notification with an icon.')
      },
      openDialog() {
        this.dialogVisible = true
      }
    }
  }
</script>

<style scoped lang="scss">

.tooltip {
  display: flex;
  align-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
}

.tooltip-item {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
