<template>
    <div class="datetimepicker">
        <div class="datetimepicker-selector">
          <label>出発日時</label>
          <input type="date" name="startDate">
          <input type="time" name="startTime">
        </div>
        <div class="datetimepicker-selector">
          <label>返却日時</label>
          <input type="date" name="endDate">
          <input type="time" name="endTime">
        </div>
        <div class="datetimepicker-deselector">
          <input type="checkbox" value="1">
          <label>日付未定</label>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DateTimePicker',
}
</script>
<style  lang="scss" scoped>
.datetimepicker {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
  
    &-selector {
      font-size: 1rem;
      display: inline-flex;
      width: 21.5rem;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.6rem;
      flex-direction: initial;
  
      input[type=date] {
        border-radius: 24.94px;
        background-color: var(--color-aliceblue);
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
        width: 8.73rem;
        height: 2rem;
        border: none;
        padding: 0 0.7rem;
      }
  
      input[type=time] {
        border-radius: 24.94px;
        background-color: var(--color-aliceblue);
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
        width: 5rem;
        height: 2rem;
        border: none;
        padding: 0 0.7rem;
      }
    }
  
    &-deselector {
      display: flex;
      align-items: flex-start;
      color: var(--color-steelblue);
    }
  }
</style>
