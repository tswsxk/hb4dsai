# 机器学习工程

## 架构

## CI/CD

## 自动机器学习

### NNI

#### 一些默认配置

* `codeDir`: 如果使用定制 Tuner，则为必需。 **相对于配置文件位置的路径**。
* `logDir`: 可选。 目录的路径。 默认值：`<user home directory>/nni/experiment`。配置目录以存储 Experiment 的日志和数据。

所有stdout的输入在`trial`底下的
* `trial.log`
  所有stderr的输入在`trial`底下的
* `stderr`

#### 关于调试
[官方](https://nni.readthedocs.io/zh/latest/Tutorial/HowToDebug.html)

* `nni log stderr`
* 或者到实验的trail底下查看`stderr`文件

## FAQ

* Error: Dispatcher stream error, tuner may have crashed.
```
(node:19787) ExperimentalWarning: The fs.promises API is experimental
Error: Dispatcher stream error, tuner may have crashed.
    at EventEmitter.dispatcher.onError (/home/tongshiwei/.local/nni/core/nnimanager.js:505:32)
    at EventEmitter.emit (events.js:182:13)
    at Socket.IpcInterface.outgoingStream.on (/home/tongshiwei/.local/nni/core/ipcInterface.js:42:72)
    at Socket.emit (events.js:182:13)
    at emitErrorNT (internal/streams/destroy.js:82:8)
    at emitErrorAndCloseNT (internal/streams/destroy.js:50:3)
    at process._tickCallback (internal/process/next_tick.js:63:19)
```
可能是由于 `final_report` 的结果类型不对，可以查看一下 `dispatcher.log `
一个可能的报错如下
```text
[01/09/2020, 03:54:20 PM] INFO (nni.msg_dispatcher_base/MainThread) Start dispatcher
[01/09/2020, 03:58:00 PM] ERROR (nni.msg_dispatcher_base/Thread-1) Incorrect final result: the final result should be float/int, or a dict which has a key named "default" whose value is float/int.
Traceback (most recent call last):
  File "/home/tongshiwei/.local/lib/python3.8/site-packages/nni/msg_dispatcher_base.py", line 90, in command_queue_worker
    self.process_command(command, data)
  File "/home/tongshiwei/.local/lib/python3.8/site-packages/nni/msg_dispatcher_base.py", line 149, in process_command
    command_handlers[command](data)
  File "/home/tongshiwei/.local/lib/python3.8/site-packages/nni/msg_dispatcher.py", line 131, in handle_report_metric_data
    self._handle_final_metric_data(data)
  File "/home/tongshiwei/.local/lib/python3.8/site-packages/nni/msg_dispatcher.py", line 179, in _handle_final_metric_data
    self.tuner.receive_trial_result(id_, _trial_params[id_], value, customized=customized,
  File "/home/tongshiwei/.local/lib/python3.8/site-packages/nni/hyperopt_tuner/hyperopt_tuner.py", line 292, in receive_trial_result
    reward = extract_scalar_reward(value)
  File "/home/tongshiwei/.local/lib/python3.8/site-packages/nni/utils.py", line 76, in extract_scalar_reward
    raise RuntimeError('Incorrect final result: the final result should be float/int, ' \
RuntimeError: Incorrect final result: the final result should be float/int, or a dict which has a key named "default" whose value is float/int.
[01/09/2020, 03:58:05 PM] INFO (nni.msg_dispatcher_base/MainThread) Dispatcher exiting...
[01/09/2020, 03:58:05 PM] INFO (nni.msg_dispatcher_base/MainThread) Terminated by NNI manager
```

## 参考资料
[模型不work怎么办？141页PPT告诉你怎么改模型](https://mp.weixin.qq.com/s/919S2M1dRMSs69gjJn0Taw)

