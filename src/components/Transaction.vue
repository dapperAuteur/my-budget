<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Transaction #: {{ transaction.id }}
      </p>
      <a class="card-header-icon">
        <span class="icon">
          <i class="fa fa-angle-down"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        Name: {{ transaction.name }} <br>
        Cost: {{ transaction.value }} <br>
        Vendor: {{ transaction.vendor }} <br>
        Type: {{ transaction.type }}
        <br>
        <small>{{ transaction.date }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item">Save</a>
      <a class="card-footer-item">Edit</a>
      <a class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script>
  export default {
    props: ['transaction'],
    data() {
      return {

      }
    }
  }
</script>

<style>
</style>
