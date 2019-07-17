/*
 * # Copyright (c) 2016-2017 The Khronos Group Inc.
 * # Copyright (c) 2016 Alexey Knyazev
 * #
 * # Licensed under the Apache License, Version 2.0 (the "License");
 * # you may not use this file except in compliance with the License.
 * # You may obtain a copy of the License at
 * #
 * #     http://www.apache.org/licenses/LICENSE-2.0
 * #
 * # Unless required by applicable law or agreed to in writing, software
 * # distributed under the License is distributed on an "AS IS" BASIS,
 * # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * # See the License for the specific language governing permissions and
 * # limitations under the License.
 */

import 'dart:async';

import 'package:build/build.dart';
import 'package:yaml/yaml.dart';

Builder versionBuilder(BuilderOptions options) => VersionBuilder();

class VersionBuilder extends Builder {
  @override
  Future build(BuildStep buildStep) async {
    final name = buildStep.inputId.package;

    final pubspec = await buildStep.readAsString(AssetId(name, 'pubspec.yaml'));

    final String version = loadYaml(pubspec)['version'];

    final versionFileId = AssetId(name, 'lib/$name.g.dart');

    await buildStep.writeAsString(versionFileId, '''
// AUTOGENERATED - DO NOT EDIT BY HAND
part of 'gltf.dart';

const String _\$gltfValidatorVersion = '$version';
''');
  }

  @override
  Map<String, List<String>> get buildExtensions => const {
        r'$lib$': ['gltf.g.dart']
      };
}